import React, { useState } from 'react';
import style from "./AuthPopUp.module.css"
import Login from './Login/Login';
import Register from './Register/Register';

const LoginPopup = () => {
    const [view, setView] = useState("");

    const changeView = (event) => {

        if (event.target) {
            let view = event.target.innerHTML;

            if (view === "Login") {
                setView("login")
            } else if (view === "Register") {
                setView("register")
            } else {
                setView("")
            }
        }else{
            setView("")
        }
    }

    return (
        <div className={style["login-popup-wrapper"]}>
            <button className={style["main-btn"]} onClick={changeView}>Login</button>
            <button className={style["main-btn"]} onClick={changeView}>Register</button>
            {view === "login" && <Login changeView={changeView} />}
            {view === "register" && <Register changeView={changeView} />}
        </div>
    );
};

export default LoginPopup;
