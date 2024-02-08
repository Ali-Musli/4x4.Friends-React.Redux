import React, { useState } from 'react';
import style from "./Login.module.css"

const Login = ({ isLoginShow }) => {
    console.log(isLoginShow);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log('Logging in with:', { email, password });
    };

    return (
        <>
            <div className={style["login-overlay"]} onClick={isLoginShow}></div>
            <div className={style["login-popup"]}>
                <div className={style["login-popup-inner"]}>
                    <i className="fa-solid fa-user"></i>
                    <h2 className={style["login-popup-title"]}>Login</h2>
                    <label className={style["label"]} htmlFor='email'>Email</label>
                    <input
                        name='email'
                        type="text"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label className={style["label"]} htmlFor='password'>Password</label>
                    <input
                        name="password"
                        type="password"
                        placeholder="********"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className={style["div-btn"]}>
                        <button className={style["cls-btn"]} onClick={isLoginShow}>Close</button>
                        <button className={style["auth-btn"]} onClick={handleLogin}>Login</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;