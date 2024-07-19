import { ChangeEvent, FormEvent, useState } from 'react'
import './Form.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

interface User {
    Email: string;
    Password: string;
    UserRole: string;
    PaymentCard: string;
    isPremeum: boolean;
    UserSettingID: number;
}

export default function Login() {
    let [user, setUser] = useState<User>({
        Email: '',
        Password: '',
        UserRole: 'User',
        PaymentCard: '',
        isPremeum: false,
        UserSettingID: 1
    })
    const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setUser({
            ...user,
            Email: e.target.value
        })
    }
    const handlePassword = (e: ChangeEvent<HTMLInputElement>) => {
        setUser({
            ...user,
            Password: e.target.value
        })
    }
    const navigate = useNavigate();
    const login = async (e:FormEvent) =>{
        try {
            const response = await axios.post("http://localhost:3000/users/login", user);
            if (response.data === true) {
              navigate("/");
            } else {
              navigate("/");
            }
          } catch (error) {
            console.error('Error logining user:', error);
            alert('Failed to login user. Please try again.');
          }
    }
    return (
        <div>
            <div className="form-container">
                <form id="loginForm" className="form">
                    <h2>Login</h2>
                    <div className="input-group">
                        <label htmlFor="Email">Email</label>
                        <input type="email" id="Email" name="Email" onChange={handleEmail}required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="Password">Password</label>
                        <input type="password" id="Password" name="Password" onChange={handlePassword} required />
                    </div>
                    <button type="submit" onClick={login}>Login</button>
                    <p className="switch-form">Don't have an account? <a href="/SignUp">Sign Up</a></p>
                </form>
            </div>
        </div>
    )
}
