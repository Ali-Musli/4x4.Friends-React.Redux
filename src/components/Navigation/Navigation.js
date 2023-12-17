import style from "./Navigation.module.css";

import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <nav className={style["main-navigation"]}>
            <ul className={style["ul-list"]}>
                <li className={style["ul-list-item"]}><Link to="/">Home</Link></li>
                <li className={style["ul-list-item"]}><Link to="/catalog">Catalog</Link></li>
                <li className={style["ul-list-item"]}><a>Forum</a></li>
                <li className={style["ul-list-item"]}><a>About</a></li>
                <li className={style["ul-list-item"]}><a>Profile</a></li>
                <li className={style["ul-list-item"]}><a>Settings</a></li>
            </ul>
        </nav>
    );
}

export default Navigation;