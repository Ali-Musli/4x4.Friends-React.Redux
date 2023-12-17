import { Link } from "react-router-dom";
import Car from "./Car/Car";
import style from "./Cars.module.css";

const cars = [
    {
        imgUrl: "https://www.coastaloffroad.com/wp-content/uploads/2022/12/1-8.jpeg",
        title: "Nissan Patrol M57",
        mileage: "250000",
        carData: "06 / 2009",
        horsePower: "190",
        gas: "Diesel",
        extras: ["4X4", "Navigation", "Rain Sensor", "Bluetooth", "Led Bar"],
        location: "Plovdiv",
        price: "25000"
    },

    {
        imgUrl: "https://mobistatic4.focus.bg/mobile/photosorg/455/2/big//21684095934550455_yq.jpg",
        title: "Nissan Patrol M53",
        mileage: "180000",
        carData: "02 / 2003",
        horsePower: "240",
        gas: "LPG",
        extras: ["4X4", "Navigation", "Rain Sensor", "Bluetooth", "Led Bar"],
        location: "Ruse",
        price: "18000"
    },

    {
        imgUrl: "https://vhedia.com.au/wp-content/uploads/2023/03/Patrol-scaled.jpeg",
        title: "Nissan Patrol",
        mileage: "150000",
        carData: "09 / 2012",
        horsePower: "299",
        gas: "Diesel",
        extras: ["4X4", "Navigation", "Rain Sensor", "Bluetooth", "Led Bar"],
        location: "Sofia",
        price: "30000"
    }
]

const Cars = () => {
    return (
        <section className={style["section-cars"]}>
            <h1 className={style["title"]}>Last Added Trucks</h1>

            {
                cars.map((item) => <Car key={item.imgUrl} {...item}/>)
            }

            <Link to="/catalog"><button className={style["button-more"]}>View All</button></Link>
        </section>
    );
}

export default Cars;