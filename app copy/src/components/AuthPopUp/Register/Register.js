import React, { useState } from 'react';

import style from "./Register.module.css";

const Register = ({ isRegisterShow }) => {
    const [confirmPass, setConfirmPass] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = () => {
        console.log('Register in with:', { email, username, password, confirmPass });
    };

    return (
        <>
            <div className={style["login-overlay"]} onClick={isRegisterShow}></div>
            <div className={style["login-popup"]}>
                <div className={style["login-popup-inner"]}>
                    <i className="fa-solid fa-user"></i>
                    <h2 className={style["login-popup-title"]} >Register</h2>
                    <form>
                        <div>
                            <label className={style["label"]} htmlFor='username'>Username</label>
                            <input
                                name='username'
                                type="text"
                                placeholder="Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>

                        <div>
                            <label className={style["label"]} htmlFor='email'>Email</label>
                            <input
                                name='email'
                                type="text"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div>
                            <label className={style["label"]} htmlFor='password'>Password</label>
                            <input
                                name='password'
                                type="password"
                                placeholder="********"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <div>
                            <label className={style["label"]} htmlFor='rePassword'>Repeat Password</label>
                            <input
                                name='rePassword'
                                type="text"
                                placeholder="********"
                                value={confirmPass}
                                onChange={(e) => setConfirmPass(e.target.value)}
                            />
                        </div>
                    </form>
                    <div className={style["div-btn"]}>
                        <button className={style["cls-btn"]} onClick={isRegisterShow}>Close</button>
                        <button className={style["auth-btn"]} onClick={handleRegister}>Register</button>
                    </div>
                    <p className={style["account-exist"]}>You already have account? <a>Login</a></p>
                </div>
            </div>
        </>
    );
}

export default Register;