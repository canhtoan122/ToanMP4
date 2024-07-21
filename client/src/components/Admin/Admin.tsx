import React from 'react'
import "./Admin.css"

export default function Admin() {
    return (
        <div className='dashboard-background'>
            <div className='container'>
                <nav className="sidebar">
                    <ul>
                        <li><a href="/Admin">Dashboard</a></li>
                        <li><a href="/User">Quản lí tài khoản</a></li>
                        <li><a href="/Musician">Quản lí ca sĩ</a></li>
                        <li><a href="/Album">Quản lí album</a></li>
                        <li><a href="/Song">Quản lí bài hát</a></li>
                        <li><a href="/HistoryOrder">Quản lí doanh thu</a></li>
                        <li className="logout"><a href="/Login">Log Out</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}
