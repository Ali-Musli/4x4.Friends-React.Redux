import React, { useState } from 'react';
import { useReduxAction } from '../../../hooks/useReduxAction';
import { authSlice } from '../../../reducers/auth';
import { errorSlice } from '../../../reducers/errors';

import style from "./Register.module.css";

const Register = ({ changeView }) => {
    const [confirmPass, setConfirmPass] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const register = useReduxAction(authSlice.actions.fetchRegister);
    const setError = useReduxAction(errorSlice.actions.setError);

    const handleRegister = () => {
        console.log('Register in with:', { email, password, username });

        if(password !== confirmPass){
            setError("Password and confirm password, should be same");
            return; 
        }

        register({email, username, password, confirmPass});
    };

    return (
        <>
            <div className={style["register-overlay"]} onClick={changeView}></div>
            <div className={style["register-popup"]}>
                <div className={style["register-popup-inner"]}>
                    <i className="fa-solid fa-user"></i>
                    <h2 className={style["register-popup-title"]} >Register</h2>
                    <form className={style["form"]}>
                        <div className={style["form-item"]}>
                            <label className={style["form-item-label"]} htmlFor='username'>Username:</label>
                            <input
                                className={style["form-item-input"]}
                                name='username'
                                type="text"
                                placeholder="Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>

                        <div className={style["form-item"]}>
                            <label className={style["form-item-label"]} htmlFor='email'>Email:</label>
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
                            <label className={style["form-item-label"]} htmlFor='password'>Password:</label>
                            <input
                                className={style["form-item-input"]}
                                name='password'
                                type="password"
                                placeholder="********"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <div className={style["form-item"]}>
                            <label className={style["form-item-label"]} htmlFor='rePassword'>Repeat Password:</label>
                            <input
                                className={style["form-item-input"]}
                                name='rePassword'
                                type="text"
                                placeholder="********"
                                value={confirmPass}
                                onChange={(e) => setConfirmPass(e.target.value)}
                            />
                        </div>
                    </form>
                    <div className={style["div-btn"]}>
                        <button className={style["cls-btn"]} onClick={changeView}>Close</button>
                        <button className={style["auth-btn"]} onClick={handleRegister}>Register</button>
                    </div>
                    <p className={style["account-exist"]}>You already have account? <a onClick={changeView} className={style["existProfile-btn"]}>Login</a></p>
                </div>
            </div>
        </>
    );
}

export default Register;