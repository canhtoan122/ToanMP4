import React, { useState } from 'react';
import axios from 'axios';
import './AddMusician.css';
import Admin from '../Admin';
import { useNavigate } from 'react-router-dom';

export default function AddMusician() {
    const [musicianName, setMusicianName] = useState('');
    const [musicianDescription, setMusicianDescription] = useState('');
    const [musicianTrending, setMusicianTrending] = useState(false);
    const [favoriteMusician, setFavoriteMusician] = useState('');
    const navigate = useNavigate();
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const newMusician = {
            MusicianName: musicianName,
            MusicianDescription: musicianDescription,
            MusicianTrending: musicianTrending,
            FavoriteMusician: favoriteMusician,
        };
        const response = await axios.post('http://localhost:3000/musician', newMusician);
        if (response.data) {
            navigate("/Musician");
        } else {
            confirm("Lỗi thêm ca sĩ");
        }
    };

    return (
        <div>
            <Admin />
            <main className="main-content">
                <header>
                    <h1>Thêm ca sĩ</h1>
                </header>
                <form onSubmit={handleSubmit} className="add-musician-form">
                    <div>
                        <label>Tên ca sĩ:</label>
                        <input 
                            type="text" 
                            value={musicianName} 
                            onChange={(e) => setMusicianName(e.target.value)} 
                        />
                    </div>
                    <div>
                        <label>Mô tả:</label>
                        <textarea 
                            value={musicianDescription} 
                            onChange={(e) => setMusicianDescription(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Trending:</label>
                        <input 
                            type="checkbox" 
                            checked={musicianTrending} 
                            onChange={(e) => setMusicianTrending(e.target.checked)}
                        />
                    </div>
                    <div>
                        <label>Ca sĩ ưa thích:</label>
                        <input 
                            type="text" 
                            value={favoriteMusician} 
                            onChange={(e) => setFavoriteMusician(e.target.value)} 
                        />
                    </div>
                    <button type="submit">Thêm</button>
                </form>
            </main>
        </div>
    );
}
