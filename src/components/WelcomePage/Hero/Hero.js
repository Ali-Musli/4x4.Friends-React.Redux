import style from "./Hero.module.css"

const Hero = () => {
    return (
        <section className={style["heroSection"]}>
            <img className={style["heroSection-img"]} src="https://www.devonchrysler.com/wp-content/uploads/2020/08/2020-jeep-wrangler-desktop-hero-blue-driving-mud-forest_2d16534304b4422ce92e1ed8076d67b2-1248x533.jpg" alt="Jeep" />
            <div className={style["heroSection-content"]}>
                <h2 className={style["heroSection-title-description"]}>About Us</h2>
                <p className={style["heroSection-content-description"]}>Get ready to embark on a thrilling journey through the rugged terrains and untamed landscapes with "4X4 Friends". Whether you're a seasoned off-road enthusiast or a newcomer eager to explore the great outdoors, our platform is designed to cater to all levels of off-road excitement.</p>
            </div>
        </section>
    );
}

export default Hero;