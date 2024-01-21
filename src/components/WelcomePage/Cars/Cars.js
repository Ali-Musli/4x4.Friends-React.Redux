import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useReduxAction } from "../../../hooks/useReduxAction";
import { useReduxState } from "../../../hooks/useReduxState";
import Car from "./Car/Car";
import style from "./Cars.module.css";
import {trucksSlice} from '../../../reducers/trucks'

const Cars = () => {
    const getTrucks = useReduxAction(trucksSlice.actions.fetchTrucks);
    useEffect(() => {
        getTrucks()
    }, [])
    const trucks = useReduxState((state) => state.trucks.trucks).slice(0,3);
    return (
        <section className={style["section-cars"]}>
            <h1 className={style["title"]}>Last Added <span className={style["title-span"]}>Trucks</span></h1>

            {
                trucks.map((item) => <Car key={item.imgUrl} {...item}/>)
            }

            <Link to="/catalog"><button className={style["button-more"]}>All Cars</button></Link>
        </section>
    );
}

export default Cars;