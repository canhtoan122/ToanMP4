import React from 'react'
import User from '../User'
import "./FavoriteSong.css"

export default function FavoriteSong() {
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
                <div className="favoriteSong">
                    <h2>Bài hát ưa thích</h2>
                    {/* <div className="song-list">
                        <div className="song-item">Hẹn Anh Mùa Thu</div>
                        <div className="song-item">Buộc Tình Lên Tim</div>
                        <div className="song-item">Năm Tháng Vội Vã</div>
                        <div className="song-item">Black Friday</div>
                        <div className="song-item">Somebody Save Me</div>
                        <div className="song-item">Ground</div>
                    </div> */}
                </div>
            </section>
        </main>
    </div>
  )
}
