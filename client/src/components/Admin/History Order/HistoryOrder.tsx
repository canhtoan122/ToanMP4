import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './HistoryOrder.css'
import Admin from '../Admin';
import { Link } from 'react-router-dom';

interface HistoryOrder {
    DateTime: string;
    AmountMoney: string;
    PaymentID: string;
}
export default function HistoryOrder() {
    let [historyOrder, setHistoryOrder] = useState<HistoryOrder[]>([]);
    useEffect(() => {
        let display = async () => {
            let historyOrders = await axios.get("http://localhost:3000/history-order");
            setHistoryOrder(historyOrders.data);
        }
        display();
    }, []);
    return (
        <div>
            <Admin></Admin>
            <main className="main-content">
                <header>
                    <h1>Quản lí giao dịch</h1>
                </header>
                <Link to="/AddHistoryOrder">
                    <button>+ Thêm</button>
                </Link>
                <table border={1} className='History-Orders-table'>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Ngày giao dịch</th>
                            <th>Tiền</th>
                            <th>ID giao dịch</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {historyOrder.map((item, index, arr) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.DateTime}</td>
                                    <td>{item.AmountMoney}</td>
                                    <td>{item.PaymentID}</td>
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
