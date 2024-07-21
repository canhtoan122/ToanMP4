import React, { useEffect, useState } from 'react';
import './Home.css';
import User from '../User';
import axios from 'axios';

interface Song {
    SongName: string;
    SongVideo: string;
    SongDescription: string;
    SongTrending: boolean;
    MusicianID: string;
}
interface Musician {
    MusicianName: string;
    MusicianDescription: string;
    MusicianTrending: boolean;
    FavoriteMusician: string;
}
interface Album {
    AlbumName: string;
    AlbumDescription: string;
    AlbumTrending: boolean;
}
export default function Home() {
    let [song, setSong] = useState<Song[]>([]);
    let [musician, setMusician] = useState<Musician[]>([]);
    let [album, setAlbum] = useState<Album[]>([]);
    const [activeTab, setActiveTab] = useState<'songs' | 'musicians' | 'albums'>('songs');
    useEffect(() => {
        let display = async () => {
            let songs = await axios.get("http://localhost:3000/song/trending");
            setSong(songs.data);
        }
        display();
    }, []);
    const renderSongs = async () =>{
        let songs = await axios.get("http://localhost:3000/song/trending");
        setSong(songs.data);
        setActiveTab('songs');
    }
    const renderMusician = async () =>{
        let musicians = await axios.get("http://localhost:3000/musician/trending");
        setMusician(musicians.data);
        setActiveTab('musicians');
    }
    
    const renderAlbum = async () =>{
        let albums = await axios.get("http://localhost:3000/album/trending");
        setAlbum(albums.data);
        setActiveTab('albums');
    }
    return (
        <div className='home-background'>
            <User></User>
            <main className="user-main-content">
                <header>
                    <input type="text" placeholder="Tìm kiếm ca sĩ, bài hát, album..." />
                    <div className="actions">
                        <button>Nâng cấp tài khoản</button>
                        {/* <div className="profile">
                        <img src="profile.png" alt="Profile" />
                    </div> */}
                    </div>
                </header>
                <section className="content">
                    {/* <div className="banner">
                    <img src="banner.png" alt="Banner" />
                </div> */}
                    <div className="trending">
                        <h2>Xu hướng</h2>
                        <div className="tabs">
                            <button onClick={renderSongs}>Bài Hát</button>
                            <button onClick={renderMusician}>Ca sĩ</button>
                            <button onClick={renderAlbum}>Album</button>
                        </div>
                        <div className="song-list">
                            {activeTab === 'songs' && (
                                <div className='list-active'>
                                    {song.map((item, index) => (
                                        <div className="song-item" key={index}>{item.SongName}</div>
                                    ))}
                                </div>
                            )}
                            {activeTab === 'musicians' && (
                                <div className='list-active'>
                                    {musician.map((item, index) => (
                                        <div className="song-item" key={index}>{item.MusicianName}</div>
                                    ))}
                                </div>
                            )}
                            {activeTab === 'albums' && (
                                <div className='list-active'>
                                    {album.map((item, index) => (
                                        <div className="song-item" key={index}>{item.AlbumName}</div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
