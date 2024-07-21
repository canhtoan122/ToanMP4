import React, { useEffect, useState } from 'react'
import User from '../User'
import "./Song.css"
import axios from 'axios';

interface Song {
    SongName: string;
    SongVideo: string;
    SongDescription: string;
    SongTrending: boolean;
    MusicianID: string;
}

export default function Song() {
    let [song, setSong] = useState<Song[]>([]);
    useEffect(() => {
        let display = async () => {
            let users = await axios.get("http://localhost:3000/song");
            setSong(users.data);
        }
        display();
    }, []);
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
                    <div className="songs">
                        <h2>Tất cả các bài hát</h2>
                        <div className="song-list">
                            {song.map((item, index, arr) => {
                                return (
                                    <div className="song-item">{item.SongName}</div>
                                )
                            })}
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}
