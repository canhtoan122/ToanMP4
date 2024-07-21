import React, { useEffect, useState } from 'react'
import User from '../User'
import "./MusicianAlbum.css"
import axios from 'axios';

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

export default function MusicianAlbum() {
    let [musician, setMusician] = useState<Musician[]>([]);
    let [album, setAlbum] = useState<Album[]>([]);
    const [activeTab, setActiveTab] = useState<'musicians' | 'albums'>('musicians');
    useEffect(() => {
        let display = async () => {
            let musicians = await axios.get("http://localhost:3000/musician");
            setMusician(musicians.data);
        }
        display();
    }, []);
    const renderMusician = async () => {
        let musicians = await axios.get("http://localhost:3000/musician");
        setMusician(musicians.data);
        setActiveTab('musicians');
    }

    const renderAlbum = async () => {
        let albums = await axios.get("http://localhost:3000/album");
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
                    <div className="musicianAlbum">
                        <h2>Tất cả các ca sĩ, album</h2>
                        <div className="tabs">
                            <button onClick={renderMusician}>Ca sĩ</button>
                            <button onClick={renderAlbum}>Album</button>
                        </div>
                        <div className="song-list">
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
    )
}
