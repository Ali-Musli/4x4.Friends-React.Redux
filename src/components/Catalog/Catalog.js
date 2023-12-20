import CatalogItem from "./CatalogItem/CatalogItem";
import style from "./Catalog.module.css";
import Paginationn from "../Pagination/Pagination";

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
        price: "25000",
        id: "1",
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
        price: "18000",
        id: "2",
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
        price: "30000",
        id: "3",
    },

    {
        imgUrl: "https://www.coastaloffroad.com/wp-content/uploads/2022/12/1-8.jpeg",
        title: "Nissan Patrol M57",
        mileage: "250000",
        carData: "06 / 2009",
        horsePower: "190",
        gas: "Diesel",
        extras: ["4X4", "Navigation", "Rain Sensor", "Bluetooth", "Led Bar"],
        location: "Plovdiv",
        price: "25000",
        id: "4",
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
        price: "18000",
        id: "5",
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
        price: "30000",
        id: "6",
    },

    {
        imgUrl: "https://www.coastaloffroad.com/wp-content/uploads/2022/12/1-8.jpeg",
        title: "Nissan Patrol M57",
        mileage: "250000",
        carData: "06 / 2009",
        horsePower: "190",
        gas: "Diesel",
        extras: ["4X4", "Navigation", "Rain Sensor", "Bluetooth", "Led Bar"],
        location: "Plovdiv",
        price: "25000",
        id: "7",
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
        price: "18000",
        id: "8",
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
        price: "30000",
        id: "9",
    },

    {
        imgUrl: "https://www.coastaloffroad.com/wp-content/uploads/2022/12/1-8.jpeg",
        title: "Nissan Patrol M57",
        mileage: "250000",
        carData: "06 / 2009",
        horsePower: "190",
        gas: "Diesel",
        extras: ["4X4", "Navigation", "Rain Sensor", "Bluetooth", "Led Bar"],
        location: "Plovdiv",
        price: "25000",
        id: "10",
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
        price: "18000",
        id: "11",
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
        price: "30000",
        id: "12",
    }
]

const Catalog = () => {
    return (
        <section className={style["section-catalog"]}>
            <input className={style["search"]} placeholder="Search..."></input>
            <div className={style["items"]}>
                {
                    cars.map((item) => {
                        return (
                            <CatalogItem key={item.id} {...item} />
                        )
                    })
                }
            </div>
            <Paginationn />
        </section>
    )
}

export default Catalog;