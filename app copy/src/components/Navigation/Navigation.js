import style from "./Navigation.module.css";

import { Link } from "react-router-dom";
import LoginPopup from "../AuthPopUp/AuthPopUp";
import { useReduxState } from "../../hooks/useReduxState";

const Navigation = () => {
    const user = useReduxState((state) => state.auth.user);

    let isAuth = () => {
        if(!!user.email){
            console.log("if");
            return !!user.email;
        }else{
            let localUser = localStorage.getItem("auth");
            return !!localUser;
        }
    }

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
                        <li className={style["ul-list-item"]}><a>Logout</a></li>
                    </>
                }
            </ul>
        </nav>
    );
}

export default Navigation;