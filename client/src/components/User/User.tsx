import React, { useEffect, useState } from 'react';
import './User.css';
import { Link, useLocation } from 'react-router-dom';

export default function User() {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState(location.pathname);

    useEffect(() => {
        setActiveLink(location.pathname);
    }, [location]);
    return (
        <div className='home-background'>
            <div className="container">
                <nav className="user-sidebar">
                    <div className="logo">
                        <h1>Toàn MP4</h1>
                    </div>
                    <ul>
                        <li className={activeLink === '/' ? 'active' : ''}>
                        <Link to="/">Trang chủ</Link>
                        </li>
                        <li className={activeLink === '/MusicianAlbum' ? 'active' : ''}>
                        <Link to="/MusicianAlbum">Ca sĩ/Album</Link>
                        </li>
                        <li className={activeLink === '/UserSong' ? 'active' : ''}>
                        <Link to="/UserSong">Phát bài hát</Link>
                        </li>
                        <li className={activeLink === '/FavoriteSong' ? 'active' : ''}>
                        <Link to="/FavoriteSong">Bài hát yêu thích</Link>
                        </li>
                    </ul>
                    <div className="login">
                        <button><a href="/Login">Đăng nhập</a></button>
                    </div>
                </nav>
            </div>
        </div>
    );
}
