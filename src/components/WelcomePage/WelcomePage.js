import Benefits from "./Benefits/Benefits";
import Cars from "./Cars/Cars";
import Hero from "./Hero/Hero";
import Maps from "./Maps/Maps";
import Partners from "./Partners/Partners";
import style from "./WelcomePage.module.css"

const WelcomePage = () => {
    return (
        <div className={style["main"]}>
            <Hero />
            <Benefits />
            <Maps />
            <Cars />
            <Partners />
        </div>
    );
}

export default WelcomePage;