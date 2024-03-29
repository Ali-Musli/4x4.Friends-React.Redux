import style from "./CatalogItem.module.css";
import 'react-image-gallery/styles/css/image-gallery.css'
import PopupDetails from "./PopupDetails/PopupDetails";

const Car = ({ imgUrl, title, price, mileage, location, horsePower, gas, carData, extras, gears, _id, images }) => {
    const data = {imgUrl, title, price, mileage, location, horsePower, gas, carData, extras, gears, _id, images};

    return (
        <div className={style["item"]}>
            <img className={style["item-img"]} src={imgUrl} alt={title} />
            <div className={style["item-content"]}>
                <h2 className={style["item-content-title"]}>{title}</h2>
                <div className={style["item-content-resume"]}>
                    <div className={style["item-content-resume-item"]}>
                        <i className="fa-solid fa-gears"></i>
                        <p>{gears}</p>
                    </div>
                    <div className={style["item-content-resume-item"]}>
                        <i className="fa-solid fa-road"></i>
                        <p>{mileage} km</p>
                    </div>
                    <div className={style["item-content-resume-item"]}>
                        <i className="fa-solid fa-calendar-days"></i>
                        <p>{carData}</p>
                    </div>
                    <div className={style["item-content-resume-item"]}>
                        <i className="fa-solid fa-horse-head"></i>
                        <p>{horsePower} hp</p>
                    </div>
                    <div className={style["item-content-resume-item"]}>
                        <i className="fa-solid fa-gas-pump"></i>
                        <p>{gas}</p>
                    </div>
                </div>
                <div className={style["item-content-extras"]}>
                    {
                        extras.slice(0, 5).map((item) => {

                            return (
                                <div key={item} className={style["item-content-extras-item"]}>
                                    <p>{item}</p>
                                </div>
                            )
                        })
                    }
                </div>
                <div className={style["item-content-info"]}>
                    <div className={style["item-content-info-location"]}>
                        <div className={style["item-content-info-location-svg"]}>
                            <i className="fa-solid fa-location-dot"></i>
                            <p>Location: </p>
                        </div>
                        <p>{location}</p>
                    </div>
                    <div className={style["item-content-info-price"]}>
                        <p>{price} Lv.</p>
                    </div>
                    <PopupDetails {...data} />
                </div>
            </div>
        </div>
    );
}

export default Car;