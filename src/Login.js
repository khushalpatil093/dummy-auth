import React , { useState } from 'react';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsername = (event) => {
        setUsername(event.target.value);
    };

    const handlePassword = (event) => {
        setPassword(event.target.value);
    };

    const handleLogin = async (event) => {
        event.preventDefault();


        fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            username: `${username}`,
            password: `${password}`,
        })
        })
        .then(res => {
        if (res.status === 200) {
            return res.json();
        } else {
            throw new Error('Login failed');
        }
        })
        .then(user => {
        localStorage.setItem('user', JSON.stringify(user));

        window.location.href = '/profile';
        })
        .catch(error => {
        console.error('Error:', error);
        });

    };

    return (
        <div className="Login" onSubmit={handleLogin}>
            <label>
                Your email
                <input type="text" id="email" value={username} onChange={handleUsername}/>
            </label>
            <label>
                Password
                <input type="text" id="password" value={password} onChange={handlePassword}/>
            </label>
            <button type='submit'>Login</button>
        </div>
    )
}

export default Login