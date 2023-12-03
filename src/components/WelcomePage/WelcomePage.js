import Benefits from "./Benefits/Benefits";
import Hero from "./Hero/Hero";
import style from "./WelcomePage.module.css"

const WelcomePage = () => {
    return (
        <div className={style["main"]}>
            <Hero />
            <Benefits />
        </div>
    );
}

export default WelcomePage;