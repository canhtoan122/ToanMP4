import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './Song.css'
import Admin from '../Admin';
import { Link } from 'react-router-dom';

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
            let songs = await axios.get("http://localhost:3000/song");
            setSong(songs.data);
        }
        display();
    }, []);
    return (
        <div>
            <Admin></Admin>
            <main className="main-content">
                <header>
                    <h1>Quản lí bài hát</h1>
                </header>
                <Link to="/AddSong">
                    <button>+ Thêm</button>
                </Link>
                <table border={1} className='song-table'>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên bài hát</th>
                            <th>Video</th>
                            <th>Mô tả</th>
                            <th>Trending</th>
                            <th>ID ca sĩ</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {song.map((item, index, arr) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.SongName}</td>
                                    <td>{item.SongVideo}</td>
                                    <td>{item.SongDescription}</td>
                                    <td>{item.SongTrending.toString()}</td>
                                    <td>{item.MusicianID}</td>
                                    <td><button>Edit</button></td>
                                    <td><button>Delete</button></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </main>
        </div>
    )
}
