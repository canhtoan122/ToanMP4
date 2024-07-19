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
  
export default function SignIn() {
    let [user, setUser] = useState<User>({
        Email: '',
        Password: '',
        UserRole: 'User',
        PaymentCard: '',
        isPremeum: false,
        UserSettingID: 1
    })
    const navigate = useNavigate();
    const submitNewUser = async (e:FormEvent) => {
        try {
            const response = await axios.post("http://localhost:3000/users/register", user);
            console.log('User created:', response.data);
            const confirms = confirm("Create new user success!");
            if (confirms) {
              navigate("/");
            } else {
              navigate("/");
            }
          } catch (error) {
            console.error('Error creating user:', error);
            alert('Failed to create user. Please try again.');
          }
    }
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
    return (
        <div>
            <div className="form-container">
                <form id="signUpForm" className="form">
                    <h2>Sign Up</h2>
                    <div className="input-group">
                        <label htmlFor="signUpEmail">Email</label>
                        <input type="email" id="Email" name="Email" onChange={handleEmail} required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="signUpPassword">Password</label>
                        <input type="password" id="Password" name="Password" onChange={handlePassword} required />
                    </div>
                    <button type="submit" onClick={submitNewUser}>Sign Up</button>
                    <p className="switch-form">Already have an account? <a href="/">Login</a></p>
                </form>
            </div>
        </div>
    )
}
