import Benefits from "./Benefits/Benefits";
import Hero from "./Hero/Hero";
import LastAdded from "./LastAdded/LastAdded";
import Maps from "./Maps/Maps";
import style from "./WelcomePage.module.css"

const WelcomePage = () => {
    return (
        <div className={style["main"]}>
            <Hero />
            <Benefits />
            <Maps />
            <LastAdded />
        </div>
    );
}

export default WelcomePage;