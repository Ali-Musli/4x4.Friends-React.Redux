import Carousel from 'react-bootstrap/Carousel';
import style from "./Maps.module.css"

const Maps = () => {
    return (
        <sectoin className={style["section-main"]}>
            <h2 className={style["section-main-title"]}>Our Favorite Trail Guides Across the Country</h2>
            <div>
                <Carousel fade="true" id={style["carusel"]}>
                    <Carousel.Item id={style["carusel-item"]}>
                        <img className={style["carusel-item-img"]} src="map-1.png"></img>
                        <div className={style["carusel-item-content"]}>
                            <p>Level: 6 / 10</p>
                            <p>Distance: 90km</p>
                            <p>Type: Forest</p>
                            <p>Region: Blagoevgrad</p>
                            <button className={style["carusel-item-content-button"]}>Details</button>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item id={style["carusel-item"]}>
                        <img className={style["carusel-item-img"]} src='map-2.png'></img>
                        <div className={style["carusel-item-content"]}>
                            <p>Level: 4 / 10</p>
                            <p>Distance: 30km</p>
                            <p>Type: Forest</p>
                            <p>Region: Pazardzhik</p>
                            <button className={style["carusel-item-content-button"]}>Details</button>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item id={style["carusel-item"]}>
                        <img className={style["carusel-item-img"]} src='map-3.png'></img>
                        <div className={style["carusel-item-content"]}>
                            <p>Level: 6.5 / 10</p>
                            <p>Distance: 40km</p>
                            <p>Type: Forest</p>
                            <p>Region: Peshtera</p>
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