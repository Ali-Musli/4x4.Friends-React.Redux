import style from "./Navigation.module.css";

import { Link } from "react-router-dom";
import LoginPopup from "../Login/Login";

const Navigation = () => {
    return (
        <nav className={style["main-navigation"]}>
            <Link to="/"><img className={style["navigation-img"]} src="https://i.ibb.co/n6PXdy6/1.jpg" /></Link>
            <ul className={style["ul-list"]}>
                <li className={style["ul-list-item"]}><Link to="/">Home</Link></li>
                <li className={style["ul-list-item"]}><Link to="/catalog">Trucks</Link></li>
                <li className={style["ul-list-item"]}><Link to="/maps">Maps</Link></li>
                <li className={style["ul-list-item"]}><a>Forum</a></li>
                <li className={style["ul-list-item"]}><a>Events</a></li>
                <li className={style["ul-list-item"]}><a>Profile</a></li>
                <li className={style["ul-list-item"]}><LoginPopup /></li>
                <li className={style["ul-list-item"]}><a>Register</a></li>
                <li className={style["ul-list-item"]}><a>Logout</a></li>
            </ul>
        </nav>
    );
}

export default Navigation;