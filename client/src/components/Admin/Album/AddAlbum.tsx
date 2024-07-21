import React, { useState } from 'react';
import axios from 'axios';
import './AddAlbum.css';
import Admin from '../Admin';
import { useNavigate } from 'react-router-dom';

export default function AddMusician() {
    const [albumName, setAlbumName] = useState('');
    const [albumDescription, setAlbumDescription] = useState('');
    const [albumTrending, setAlbumTrending] = useState(false);
    const navigate = useNavigate();
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const newAlbum = {
            AlbumName: albumName,
            AlbumDescription: albumDescription,
            AlbumTrending: albumTrending,
        };
        const response = await axios.post('http://localhost:3000/album', newAlbum);
        if (response.data) {
            navigate("/Album");
        } else {
            confirm("Lỗi thêm album");
        }
    };

    return (
        <div>
            <Admin />
            <main className="main-content">
                <header>
                    <h1>Thêm album</h1>
                </header>
                <form onSubmit={handleSubmit} className="add-album-form">
                    <div>
                        <label>Tên album:</label>
                        <input 
                            type="text" 
                            value={albumName} 
                            onChange={(e) => setAlbumName(e.target.value)} 
                        />
                    </div>
                    <div>
                        <label>Mô tả:</label>
                        <textarea 
                            value={albumDescription} 
                            onChange={(e) => setAlbumDescription(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Trending:</label>
                        <input 
                            type="checkbox" 
                            checked={albumTrending} 
                            onChange={(e) => setAlbumTrending(e.target.checked)}
                        />
                    </div>
                    <button type="submit">Thêm</button>
                </form>
            </main>
        </div>
    );
}
