import style from "./Navigation.module.css"

const Navigation = () => {
    return (
        <nav className={style["main-navigation"]}>
            <ul className={style["ul-list"]}>
                <li className={style["ul-list-item"]}><a>Home</a></li>
                <li className={style["ul-list-item"]}><a>About</a></li>
                <li className={style["ul-list-item"]}><a>Profile</a></li>
                <li className={style["ul-list-item"]}><a>Setings</a></li>
            </ul>
        </nav>
    );
}

export default Navigation;