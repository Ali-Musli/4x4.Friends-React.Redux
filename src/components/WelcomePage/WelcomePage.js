import Benefits from "./Benefits/Benefits";
import Hero from "./Hero/Hero";
import Maps from "./Maps/Maps";
import style from "./WelcomePage.module.css"

const WelcomePage = () => {
    return (
        <div className={style["main"]}>
            <Hero />
            <Benefits />
            <Maps />
        </div>
    );
}

export default WelcomePage;