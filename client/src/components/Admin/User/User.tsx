import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './User.css'
import Admin from '../Admin';

interface User {
    Email: string;
    Password: string;
    UserRole: string;
    PaymentCard: string;
    isPremeum: boolean;
}
export default function User() {
    let [user, setUser] = useState<User[]>([]);
    useEffect(() => {
        let display = async () => {
            let users = await axios.get("http://localhost:3000/users");
            setUser(users.data);
        }
        display();
    }, []);
    return (
        <div>
            <Admin></Admin>
            <main className="main-content">
                <header>
                    <h1>Quản lí tài khoản</h1>
                </header>
                <button>+ Thêm</button>
                <table border={1} className='users-table'>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Vai trò</th>
                            <th>Thẻ ngân hàng</th>
                            <th>Premeum</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {user.map((item, index, arr) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.Email}</td>
                                    <td>{item.Password}</td>
                                    <td>{item.UserRole}</td>
                                    <td>{item.PaymentCard}</td>
                                    <td>{item.isPremeum.toString()}</td>
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
