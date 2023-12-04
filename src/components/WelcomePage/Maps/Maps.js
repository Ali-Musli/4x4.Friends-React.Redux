import Carousel from 'react-bootstrap/Carousel';
import style from "./Maps.module.css"

const Maps = () => {
    return (
        <sectoin className={style["section-main"]}>
            <div>
                <Carousel id={style["carusel"]} fade>
                    <Carousel.Item id={style["carusel-item"]}>
                        <img className={style["carusel-item-img"]} src='https://i.stack.imgur.com/3FEP9.png'></img>
                        <div className={style["carusel-item-content"]}>
                            <p>Level: 5 / 10</p>
                            <p>Distance: 15km</p>
                            <p>Type: Forest</p>
                            <p>Region: Kovachevica</p>
                            <button className={style["carusel-item-content-button"]}>Details</button>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item id={style["carusel-item"]}>
                        <img className={style["carusel-item-img"]} src='https://i.ytimg.com/vi/tlmUJ8-KQ5o/maxresdefault.jpg'></img>
                        <div className={style["carusel-item-content"]}>
                            <p>Level: 5 / 10</p>
                            <p>Distance: 15km</p>
                            <p>Type: Forest</p>
                            <p>Region: Kovachevica</p>
                            <button className={style["carusel-item-content-button"]}>Details</button>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item id={style["carusel-item"]}>
                        <img className={style["carusel-item-img"]} src='https://ghacks.net/wp-content/uploads/2012/03/yahoo-driving-directions.jpg'></img>
                        <div className={style["carusel-item-content"]}>
                            <p>Level: 5 / 10</p>
                            <p>Distance: 15km</p>
                            <p>Type: Forest</p>
                            <p>Region: Kovachevica</p>
                            <button className={style["carusel-item-content-button"]}>Details</button>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>

            <button>All Maps</button>
        </sectoin>
    );
}

export default Maps;