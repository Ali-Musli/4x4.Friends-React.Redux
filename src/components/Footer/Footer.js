import style from "./Footer.module.css"

const Footer = () => {
    return (
        <footer className={style["section-footer"]}>
            <div className={style["div-advantages"]}>
                <div className={style["div-advantages-item"]}>
                    <i className="fa-solid fa-truck"></i>
                    <h3 className={style["div-advantages-item-title"]}>Free delivery</h3>
                    <p className={style["div-advantages-item-description"]}>Minimum order value from 100 EUR</p>
                </div>

                <div className={style["div-advantages-item"]}>
                    <i className="fa-solid fa-truck-monster"></i>
                    <h3 className={style["div-advantages-item-title"]}>Leader in offroad</h3>
                    <p className={style["div-advantages-item-description"]}>The biggest 4x4 shop in Europe</p>
                </div>

                <div className={style["div-advantages-item"]}>
                    <i className="fa-solid fa-award"></i>
                    <h3 className={style["div-advantages-item-title"]}>Worldwide warranty</h3>
                    <p className={style["div-advantages-item-description"]}>24 months</p>
                </div>

                <div className={style["div-advantages-item"]}>
                    <i className="fa-solid fa-headset"></i>
                    <h3 className={style["div-advantages-item-title"]}>Technical support</h3>
                    <p className={style["div-advantages-item-description"]}>Experienced professionals</p>
                </div>
            </div>

            <div className={style["div-footer"]}>
                <div className={style["div-links"]}>
                    <div>
                        <h3 className={style["div-links-title"]}>INFORMATION</h3>
                        <ul className={style["div-links-information"]}>
                            <li><a>About us</a></li>
                            <li><a>Policy privacy</a></li>
                            <li><a>Delivery</a></li>
                            <li><a>Regulations</a></li>
                        </ul>
                    </div>


                    <div>
                        <h3 className={style["div-links-title"]}>ADDITIONAL INFO</h3>
                        <ul className={style["div-links-additional-info"]}>
                            <li><a>Warranty</a></li>
                            <li><a>Complaint</a></li>
                            <li><a>Contact us</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className={style["div-links-title"]}>CONTACT</h3>
                        <ul className={style["div-links-contact"]}>
                            <li className={style["div-links-contact-item"]}>
                                <i class="fa-solid fa-phone"></i>
                                <p>+48 12 312 53 86</p>
                            </li>
                            <li className={style["div-links-contact-item"]}>
                                <i class="fa-solid fa-envelope"></i>
                                <p>4x4-friends@abv.bg</p>
                            </li>
                            <li>Mon - Fri / 8:00 - 16:00</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className={style["div-links-title"]}>SOCIAL</h3>
                        <ul className={style["div-links-social"]}>
                            <li><i class="fa-brands fa-facebook"></i></li>
                            <li><i class="fa-brands fa-instagram"></i></li>
                            <li><i class="fa-brands fa-youtube"></i></li>
                            <li><i class="fa-brands fa-discord"></i></li>
                        </ul>
                    </div>

                </div>
                <div className={style["div-rights-reserved"]}>
                    <p>© 2023 - 4x4 Friends</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;