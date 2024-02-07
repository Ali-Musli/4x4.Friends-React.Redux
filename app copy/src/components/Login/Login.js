import React, { useState } from 'react';
import style from "./Login.module.css"

const LoginPopup = () => {
    const [confirmPass, setConfirmPass] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPopup, setShowPopup] = useState(false);
    const [showRegisterPopUp, setShowRegisterPopUp] = useState(false)

    const handleLogin = () => {
        // Here you can implement your login logic
        console.log('Logging in with:', { username, password });
        // For demonstration purposes, let's just close the popup
        // setShowPopup(false);
    };

    const handleRegister = () => {
        // Here you can implement your login logic
        console.log('Register in with:', {email, username, password, confirmPass});
        // For demonstration purposes, let's just close the popup
        // setShowPopup(false);
    };

    return (
        <div className={style["login-popup-wrapper"]}>
            <button className={style["main-btn"]} onClick={() => setShowPopup(true)}>Login</button>
            <button className={style["main-btn"]} onClick={() => setShowRegisterPopUp(true)}>Register</button>
            {showPopup && (
                <>
                    <div className={style["login-overlay"]} onClick={() => setShowPopup(false)}></div>
                    <div className={style["login-popup"]}>
                        <div className={style["login-popup-inner"]}>
                            <h2>Login</h2>
                            <input
                                type="text"
                                placeholder="Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <button onClick={handleLogin}>Login</button>
                            <button onClick={() => setShowPopup(false)}>Close</button>
                        </div>
                    </div>
                </>
            )}
             {showRegisterPopUp && (
                <>
                    <div className={style["login-overlay"]} onClick={() => setShowRegisterPopUp(false)}></div>
                    <div className={style["login-popup"]}>
                        <div className={style["login-popup-inner"]}>
                            <h2>Register</h2>
                            <input
                                type="text"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="Confirm Password"
                                value={confirmPass}
                                onChange={(e) => setConfirmPass(e.target.value)}
                            />
                            <button onClick={handleRegister}>Register</button>
                            <button onClick={() => setShowRegisterPopUp(false)}>Close</button>
                        </div>
                    </div>
                </>
            )}

        </div>
    );
};

export default LoginPopup;
