import Popup from "../../../Popup/Popup";
import Gallery from "react-image-gallery";
import 'react-image-gallery/styles/css/image-gallery.css';
import style from './PopupDetails.module.css'
import { useState } from "react";
import { useReduxAction } from "../../../../hooks/useReduxAction";
import { trucksSlice } from "../../../../reducers/trucks";

const PopupDetails = ({imgUrl, title, price, mileage, location, horsePower, gas, carData, extras, gears, _id, images }) => {
    const [isPopupOpen, setPopupOpen] = useState(false);
    const fetchTruckById = useReduxAction(trucksSlice.actions.fetchTruckById)

    const openPopup = () => {
        setPopupOpen(true);
        console.log(imgUrl);
        fetchTruckById(_id);

    };

    const closePopup = () => {
        setPopupOpen(false);
    };

    // const images = [
    //     {
    //         original: imgUrl,
    //         thumbnail: imgUrl,
    //         description: title,
    //         originalHeight: "600px",
    //     },
    //     {
    //         original: "https://mobistatic2.focus.bg/mobile/photosmob/194/2/big1/21699446439884194_2s.jpg",
    //         thumbnail: "https://mobistatic2.focus.bg/mobile/photosmob/194/2/big1/21699446439884194_2s.jpg",
    //         description: title,
    //         originalHeight: "600px",
    //     },

    //     {
    //         original: "https://mobistatic2.focus.bg/mobile/photosmob/194/2/big1/21699446439884194_vU.jpg",
    //         thumbnail: "https://mobistatic2.focus.bg/mobile/photosmob/194/2/big1/21699446439884194_vU.jpg",
    //         description: title,
    //         originalHeight: "600px"
    //     },

    //     {
    //         original: "https://mobistatic2.focus.bg/mobile/photosmob/194/2/big1/21699446439884194_Ee.jpg",
    //         thumbnail: "https://mobistatic2.focus.bg/mobile/photosmob/194/2/big1/21699446439884194_Ee.jpg",
    //         description: title,
    //         originalHeight: "600px"
    //     },

    //     {
    //         original: "https://mobistatic2.focus.bg/mobile/photosmob/194/2/big1/21699446439884194_8x.jpg",
    //         thumbnail: "https://mobistatic2.focus.bg/mobile/photosmob/194/2/big1/21699446439884194_8x.jpg",
    //         description: title,
    //         originalHeight: "600px"
    //     },

    //     {
    //         original: "https://mobistatic2.focus.bg/mobile/photosmob/194/2/big1/21699446439884194_nM.jpg",
    //         thumbnail: "https://mobistatic2.focus.bg/mobile/photosmob/194/2/big1/21699446439884194_nM.jpg",
    //         description: title,
    //         originalHeight: "600px"
    //     },
    //     {
    //         original: "https://mobistatic2.focus.bg/mobile/photosmob/194/2/big1/21699446439884194_IR.jpg",
    //         thumbnail: "https://mobistatic2.focus.bg/mobile/photosmob/194/2/big1/21699446439884194_nM.jpg",
    //         description: title,
    //         originalHeight: "600px"
    //     },
    // ];
    return (
        <div className={style["item-popup"]}>
            <button className={style["item-popup-btn"]} onClick={openPopup}>Details</button>
            <Popup isOpen={isPopupOpen} onClose={closePopup}>
                <div className={style["item-popup-content"]}>
                    <div className={style["popup-gallery"]}>
                        <Gallery items={images} showIndex="true" showFullscreenButton={false} />
                    </div>
                    <div className={style["popup-summary"]}>
                        <div className={style['popup-summary-summary']}>
                            <h2 className={style["popup-summary-title"]}>{title}</h2>
                            <div className={style["item-content-resume"]}>
                                <div className={style["item-content-resume-item"]}>
                                    <i class="fa-solid fa-gears"></i>
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
                        </div>
                        <div className={style["popup-summary-price"]}>
                            <h3>Цена:</h3>
                            <p>{price} Лв.</p>
                        </div>
                    </div>
                    <div className={style["popup-content"]}>
                        <div className={style['popup-content-description']}>
                            <h3>Описание</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem IpsumLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem IpsumLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                        </div>
                        <div className={style["popup-content-extras"]}>
                            <h3>Екстри</h3>
                            <ul className={style['extras-list']}>
                                {
                                    extras.map((extra) => {
                                        return (
                                            <li>{extra}</li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                    <div className={style["popup-contact"]}>
                        <div className={style["popup-contact-phone"]}>
                            <i class="fa-solid fa-phone"></i>
                            <h3>Контакт:</h3>
                            <p>+369 444 9450</p>
                        </div>
                        <div className={style["popup-contact-location"]}>
                            <i class="fa-solid fa-location-dot"></i>
                            <h3>Локация:</h3>
                            <p>{location}</p>
                        </div>
                    </div>
                </div>
            </Popup>
        </div>
    )
};

export default PopupDetails;