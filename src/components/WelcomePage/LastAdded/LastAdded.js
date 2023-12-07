import style from "./LastAdded.module.css"

const LastAdded = () => {
    return (
        <section className={style["last-added-section"]}>
            <h2 className={style["last-added-section-title"]}>Your next truck?</h2>
            <div className={style["last-added-section-list"]}>
                <div className={style["list-item"]}>
                    <img src="https://intercars.pl/blog/wp-content/uploads/2023/05/nissan-patrol-1.jpg" className={style["list-item-img"]}></img>
                    <div className={style["list-items-svg"]}>
                        <div className={style["list-items-svg-div"]}>
                            <i class="fa-solid fa-road"></i>
                            <p>200 000 km</p>
                        </div>

                        <div className={style["list-items-svg-div"]}>
                            <i class="fa-regular fa-calendar-days"></i>
                            <p>9/2012</p>
                        </div>

                        <div className={style["list-items-svg-div"]}>
                            <i class="fa-solid fa-horse-head"></i>
                            <p>289 hp</p>
                        </div>

                        <div className={style["list-items-svg-div"]}>
                            <i class="fa-solid fa-gas-pump"></i>
                            <p>Petrol</p>
                        </div>
                    </div>
                    <button className={style["list-item-btn"]}>Details</button>
                </div>

                <div className={style["list-item"]}>
                    <img src="https://intercars.pl/blog/wp-content/uploads/2023/05/nissan-patrol-1.jpg" className={style["list-item-img"]}></img>
                    <div className={style["list-items-svg"]}>
                        <div className={style["list-items-svg-div"]}>
                            <i class="fa-solid fa-road"></i>
                            <p>200 000 km</p>
                        </div>

                        <div className={style["list-items-svg-div"]}>
                            <i class="fa-regular fa-calendar-days"></i>
                            <p>9/2012</p>
                        </div>

                        <div className={style["list-items-svg-div"]}>
                            <i class="fa-solid fa-horse-head"></i>
                            <p>289 hp</p>
                        </div>
                        
                        <div className={style["list-items-svg-div"]}>
                            <i class="fa-solid fa-gas-pump"></i>
                            <p>Petrol</p>
                        </div>
                    </div>
                    <button className={style["list-item-btn"]}>Details</button>
                </div>

                <div className={style["list-item"]}>
                    <img src="https://intercars.pl/blog/wp-content/uploads/2023/05/nissan-patrol-1.jpg" className={style["list-item-img"]}></img>
                    <div className={style["list-items-svg"]}>
                        <div className={style["list-items-svg-div"]}>
                            <i class="fa-solid fa-road"></i>
                            <p>200 000 km</p>
                        </div>

                        <div className={style["list-items-svg-div"]}>
                            <i class="fa-regular fa-calendar-days"></i>
                            <p>9/2012</p>
                        </div>

                        <div className={style["list-items-svg-div"]}>
                            <i class="fa-solid fa-horse-head"></i>
                            <p>289 hp</p>
                        </div>
                        
                        <div className={style["list-items-svg-div"]}>
                            <i class="fa-solid fa-gas-pump"></i>
                            <p>Petrol</p>
                        </div>
                    </div>
                    <button className={style["list-item-btn"]}>Details</button>
                </div>
            </div>
            <button className={style["last-added-section-btn"]}>View More</button>
        </section>
    );
}

export default LastAdded;