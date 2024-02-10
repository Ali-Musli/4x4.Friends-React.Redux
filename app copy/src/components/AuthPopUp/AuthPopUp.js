import React, { useState } from 'react';
import style from "./AuthPopUp.module.css"
import Login from './Login/Login';
import Register from './Register/Register';

const LoginPopup = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [showRegisterPopUp, setShowRegisterPopUp] = useState(false)

    const isLoginShow = () => {
        setShowPopup(state => !state)
    }

    const isRegisterShow = () => {
        setShowRegisterPopUp(state => !state)
    }

    return (
        <div className={style["login-popup-wrapper"]}>
            <button className={style["main-btn"]} onClick={() => setShowPopup(true)}>Login</button>
            <button className={style["main-btn"]} onClick={() => setShowRegisterPopUp(true)}>Register</button>
            {showPopup && <Login isLoginShow={isLoginShow} setShowRegisterPopUp={setShowRegisterPopUp} />}
            {showRegisterPopUp && <Register isRegisterShow={isRegisterShow} isLoginShow={isLoginShow} />}
        </div>
    );
};

export default LoginPopup;
