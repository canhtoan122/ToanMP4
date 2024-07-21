import React from 'react'
import "./Dashboard.css"
import Admin from '../Admin'

export default function Dashboard() {
    return (
        <div>
            <Admin></Admin>
            <main className="main-content">
                <header>
                    <h1>Dashboard</h1>
                </header>
                <div className='payment'>
                    <h2>Thống kê đơn hàng</h2>
                </div>
                <div className='history-order'>
                    <h2>Thống kê doanh thu</h2>
                </div>
                <div className='song'>
                    <h2>Thống kê bài hát</h2>
                </div>
                <div className='user'>
                    <h2>Thống kê user</h2>
                </div>
            </main>
        </div>
    )
}
