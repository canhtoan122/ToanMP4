import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './Album.css'
import Admin from '../Admin';
import { Link } from 'react-router-dom';

interface Album {
    AlbumName: string;
    AlbumDescription: string;
    AlbumTrending: boolean;
}
export default function Album() {
    let [album, setAlbum] = useState<Album[]>([]);
    useEffect(() => {
        let display = async () => {
            let albums = await axios.get("http://localhost:3000/album");
            setAlbum(albums.data);
        }
        display();
    }, []);
    return (
        <div>
            <Admin></Admin>
            <main className="main-content">
                <header>
                    <h1>Quản lí album</h1>
                </header>
                <Link to="/AddAlbum">
                    <button>+ Thêm</button>
                </Link>
                <table border={1} className='album-table'>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên Album</th>
                            <th>Mô tả</th>
                            <th>Trending</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {album.map((item, index, arr) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.AlbumName}</td>
                                    <td>{item.AlbumDescription}</td>
                                    <td>{item.AlbumTrending.toString()}</td>
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
