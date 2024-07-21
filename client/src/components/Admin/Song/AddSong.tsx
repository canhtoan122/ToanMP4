import React, { useState } from 'react';
import axios from 'axios';
import './AddSong.css';
import Admin from '../Admin';
import { useNavigate } from 'react-router-dom';

export default function AddSong() {
    const [songName, setSongName] = useState('');
    const [songVideo, setSongVideo] = useState('');
    const [songDescription, setSongDescription] = useState('');
    const [songTrending, setSongTrending] = useState(false);
    const [musicianID, setMusicianID] = useState('');
    const navigate = useNavigate();
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const newSong = {
            SongName: songName,
            SongVideo: songVideo,
            SongDescription: songDescription,
            SongTrending: songTrending,
            MusicianID: musicianID,
        };
        const response = await axios.post('http://localhost:3000/song', newSong);
        if (response.data) {
            navigate("/Song");
        } else {
            confirm("Lỗi thêm bài hát mới");
        }
    };

    return (
        <div>
            <Admin />
            <main className="main-content">
                <header>
                    <h1>Thêm bài hát</h1>
                </header>
                <form onSubmit={handleSubmit} className="add-song-form">
                    <div>
                        <label>Tên bài hát:</label>
                        <input 
                            type="text" 
                            value={songName} 
                            onChange={(e) => setSongName(e.target.value)} 
                        />
                    </div>
                    <div>
                        <label>Video</label>
                        <input 
                            type="text" 
                            value={songVideo} 
                            onChange={(e) => setSongVideo(e.target.value)} 
                        />
                    </div>
                    <div>
                        <label>Mô tả:</label>
                        <textarea 
                            value={songDescription} 
                            onChange={(e) => setSongDescription(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Trending:</label>
                        <input 
                            type="checkbox" 
                            checked={songTrending} 
                            onChange={(e) => setSongTrending(e.target.checked)}
                        />
                    </div>
                    <div>
                        <label>ID ca sĩ</label>
                        <input 
                            type="text" 
                            value={musicianID} 
                            onChange={(e) => setMusicianID(e.target.value)} 
                        />
                    </div>
                    <button type="submit">Thêm</button>
                </form>
            </main>
        </div>
    );
}
