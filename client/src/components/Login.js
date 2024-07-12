import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Import Login.css

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(''); // State to handle error messages
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/auth/login', { f_userName: username, f_Pwd: password });
            if (response.data.token) {
                localStorage.setItem('token', response.data.token);
                navigate('/Dashboard');
            }
        } catch (error) {
            setError('Login failed. Please check your credentials.');
            console.error('Login failed', error);
        }
    };

    return (
        <div className="login-form">
            <h2 style={{ textAlign: 'center',fontSize: '32px' }}>LOGIN</h2>
            {error && <p className="error">{error}</p>} {/* Display error message */}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
