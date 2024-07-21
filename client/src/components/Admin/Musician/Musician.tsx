import React, { useEffect, useState } from 'react'
import './Musician.css'
import Admin from '../Admin'
import axios from 'axios';
import { Link } from 'react-router-dom';

interface Musician {
    MusicianName: string;
    MusicianDescription: string;
    MusicianTrending: boolean;
    FavoriteMusician: string;
}

export default function Musician() {
    let [musician, setMusician] = useState<Musician[]>([]);
    useEffect(() => {
        let display = async () => {
            let users = await axios.get("http://localhost:3000/musician");
            setMusician(users.data);
        }
        display();
    }, []);
  return (
    <div>
        <Admin></Admin>
        <main className="main-content">
            <header>
                <h1>Quản lí ca sĩ</h1>
            </header>
            <Link to="/AddMusician">
                <button>+ Thêm</button>
            </Link>
            <table border={1} className='musician-table'>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên ca sĩ</th>
                            <th>Mô tả</th>
                            <th>Trending</th>
                            <th>Ca sĩ ưa thích</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {musician.map((item, index, arr) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.MusicianName}</td>
                                    <td>{item.MusicianDescription}</td>
                                    <td>{item.MusicianTrending.toString()}</td>
                                    <td>{item.FavoriteMusician}</td>
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
