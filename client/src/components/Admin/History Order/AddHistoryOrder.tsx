import React, { useState } from 'react';
import axios from 'axios';
import './AddHistoryOrder.css';
import Admin from '../Admin';
import { useNavigate } from 'react-router-dom';

export default function AddHistoryOrder() {
    const [dateTime, setDateTime] = useState('');
    const [amountMoney, setAmountMoney] = useState('');
    const [paymentID, setPaymentID] = useState('');
    const navigate = useNavigate();
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const newHistoryOrder = {
            DateTime: dateTime,
            AmountMoney: amountMoney,
            PaymentID: paymentID,
        };
        const response = await axios.post('http://localhost:3000/history-order', newHistoryOrder);
        if (response.data) {
            navigate("/HistoryOrder");
        } else {
            confirm("Lỗi thêm giao dịch mới");
        }
    };
    return (
        <div>
            <Admin />
            <main className="main-content">
                <header>
                    <h1>Thêm giao dịch</h1>
                </header>
                <form onSubmit={handleSubmit} className="add-historyOrder-form">
                    <div>
                        <label>Ngày giờ giao dịch:</label>
                        <input 
                            type="date" 
                            value={dateTime} 
                            onChange={(e) => setDateTime(e.target.value)} 
                        />
                    </div>
                    <div>
                        <label>Lượng tiền:</label>
                        <input 
                            type="text" 
                            value={amountMoney} 
                            onChange={(e) => setAmountMoney(e.target.value)} 
                        />
                    </div>
                    <div>
                        <label>ID giao dịch</label>
                        <textarea 
                            value={paymentID} 
                            onChange={(e) => setPaymentID(e.target.value)}
                        />
                    </div>
                    <button type="submit">Thêm</button>
                </form>
            </main>
        </div>
    );
}