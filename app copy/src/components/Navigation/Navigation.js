import style from "./Navigation.module.css";

import { Link } from "react-router-dom";
import LoginPopup from "../AuthPopUp/AuthPopUp";
import { useReduxState } from "../../hooks/useReduxState";
import { useReduxAction } from "../../hooks/useReduxAction";
import { authSlice } from "../../reducers/auth";
import { useEffect, useState } from "react";
import { errorSlice } from "../../reducers/errors";

const Navigation = () => {
    const user = useReduxState((state) => state.auth.user);
    const error = useReduxState((state) => state.error.error);
    const clearError = useReduxAction(errorSlice.actions.clearError)
    const logout = useReduxAction(authSlice.actions.removeUser);

    const [isErrorVisible, setErrorVisible] = useState(false);

    useEffect(() => {
        setErrorVisible(true);
        const timer = setTimeout(() => {
            setErrorVisible(false);
            clearError()
        }, 3000);

        return () => clearTimeout(timer);
    }, [error])

    let isAuth = () => {
        if (!!user.email) {
            console.log("if");
            return !!user.email;
        } else {
            let localUser = localStorage.getItem("auth");
            return !!localUser;
        }
    };

    let auth = isAuth();

    return (
        <nav className={style["main-navigation"]}>
            <Link to="/"><img className={style["navigation-img"]} src="https://i.ibb.co/n6PXdy6/1.jpg" /></Link>
            <ul className={style["ul-list"]}>
                <li className={style["ul-list-item"]}><Link to="/">Home</Link></li>
                <li className={style["ul-list-item"]}><Link to="/catalog">Trucks</Link></li>
                <li className={style["ul-list-item"]}><Link to="/maps">Maps</Link></li>
                <li className={style["ul-list-item"]}><a>Forum</a></li>
                <li className={style["ul-list-item"]}><a>Events</a></li>
                {!auth && <li className={style["ul-list-item"]}><LoginPopup /></li>}
                {auth &&
                    <>
                        <li className={style["ul-list-item"]}><a>Profile</a></li>
                        <li className={style["ul-list-item"]}><a onClick={() => logout()}>Logout</a></li>
                    </>
                }
            </ul>
            {error && isErrorVisible && <p className={style["errorMessage"]}>{error}</p>}
        </nav>
    );
}

export default Navigation;