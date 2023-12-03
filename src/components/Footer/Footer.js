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
                    <ul>
                        <ul>INFORMATION
                            <li><a>About us</a></li>
                            <li><a>Policy privacy</a></li>
                            <li><a>Delivery</a></li>
                            <li><a>Regulations</a></li>
                        </ul>
                    </ul>

                    <ul>
                        <ul>ADDITIONAL INFO
                            <li><a>Warranty</a></li>
                            <li><a>Complaint</a></li>
                            <li><a>Contact us</a></li>
                        </ul>
                    </ul>

                    <ul>
                        <ul>CONTACT
                            <li>
                                <i class="fa-solid fa-phone"></i>
                                <p>+48 12 312 53 86</p>
                            </li>
                            <li>
                                <i class="fa-solid fa-envelope"></i>
                                <p>4x4-friends@abv.bg</p>
                            </li>
                            <li>Mon - Fri 8:00 - 16:00</li>
                        </ul>
                    </ul>

                    <ul>
                        <ul>SOCIAL
                            <li><i class="fa-brands fa-facebook"></i></li>
                            <li><i class="fa-brands fa-instagram"></i></li>
                            <li><i class="fa-brands fa-youtube"></i></li>
                            <li><i class="fa-brands fa-discord"></i></li>
                        </ul>
                    </ul>
                </div>
                <div className={style["div-rights-reserved"]}>
                    <p>© 2023 - Offroad-Express</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;