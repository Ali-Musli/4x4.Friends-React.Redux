import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { useReduxAction } from '../../../hooks/useReduxAction';
import { authSlice } from '../../../reducers/auth';
import style from "./Login.module.css"

const Login = ({ changeView }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = useReduxAction(authSlice.actions.fetchLogin);

    const handleLogin = () => {
        console.log('Logging in with:', { email, password });
        
        login({email, password});
        changeView("")
    };

    return (
        <>
            <div className={style["login-overlay"]} onClick={changeView}></div>
            <div className={style["login-popup"]}>
                <div className={style["login-popup-inner"]}>
                    <i className="fa-solid fa-user"></i>
                    <h2 className={style["login-popup-title"]}>Login</h2>
                    <form className={style["form"]}>
                        <div className={style["form-item"]}>
                            <label className={style["form-item-label"]} htmlFor='email'>Email: </label>
                            <input
                                className={style["form-item-input"]}
                                name='email'
                                type="text"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className={style["form-item"]}>
                            <label className={style["form-item-label"]} htmlFor='password'>Password: </label>
                            <input
                                className={style["form-item-input"]}
                                name="password"
                                type="password"
                                placeholder="********"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </form>
                    <div className={style["div-btn"]}>
                        <button className={style["cls-btn"]} onClick={changeView}>Close</button>
                        <button className={style["auth-btn"]} onClick={handleLogin}>Login</button>
                    </div>
                    <p className={style["account-exist"]}>Don't have an account yet? <a onClick={changeView} className={style["existProfile-btn"]}>Register</a></p>
                </div>
            </div>
        </>
    )
}

export default Login;