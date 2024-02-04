import Carousel from 'react-bootstrap/Carousel';
import style from "./Maps.module.css";

import { useReduxAction } from "../../../hooks/useReduxAction";
import { mapsSlice } from '../../../reducers/maps';
import { useEffect } from 'react';

const Maps = () => {
    const getAllMaps = useReduxAction(mapsSlice.actions.fetchAllMaps);

    useEffect(() => {
        getAllMaps()
    }, [])
    return (
        <section className={style["section-main"]}>
            <h2 className={style["section-main-title"]}>Our Favorite <spam className={style["title-span"]}>Trail Guides</spam> Across the Country</h2>
            <div>
                <Carousel fade="true" id={style["carusel"]}>
                    <Carousel.Item id={style["carusel-item"]}>
                        <img className={style["carusel-item-img"]} src="maps/map-1.png"></img>
                        <div className={style["carusel-item-content"]}>
                            <p>Level: 6 / 10</p>
                            <p>Distance: 90km</p>
                            <p>Type: Forest</p>
                            <p>Region: Blagoevgrad</p>
                            <button className={style["carusel-item-content-button"]}>Details</button>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item id={style["carusel-item"]}>
                        <img className={style["carusel-item-img"]} src='maps/map-2.png'></img>
                        <div className={style["carusel-item-content"]}>
                            <p>Level: 4 / 10</p>
                            <p>Distance: 30km</p>
                            <p>Type: Forest</p>
                            <p>Region: Pazardzhik</p>
                            <button className={style["carusel-item-content-button"]}>Details</button>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item id={style["carusel-item"]}>
                        <img className={style["carusel-item-img"]} src='maps/map-3.png'></img>
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

            <button className={style["section-main-view-all-maps"]}>All Maps</button>
        </section>
    );
}

export default Maps;