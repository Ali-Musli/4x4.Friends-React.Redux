import Carousel from 'react-bootstrap/Carousel';
import style from "./Partners.module.css"

function Partners() {
    return (
        <section className={style["section-partners"]}>
            <h2 className={style["title"]}>Our <span className={style["titile-span"]}>Partners</span></h2>
            <Carousel id={style["carousel"]}>
                <Carousel.Item id={style["carousel-item"]}>
                    <div className={style['carousel-item-div']}>
                        <img className={style['carousel-img']} src='brands/maxxis.png' alt='BFGoodrich' />
                        <img className={style['carousel-img']} src='brands/smittybilt.png' alt='Smittybilt' />
                        <img className={style['carousel-img']} src='brands/warn.gif' alt='Smittybilt' />
                    </div>
                </Carousel.Item>

                <Carousel.Item id={style["carousel-item"]}>
                    <div className={style['carousel-item-div']}>
                        <img className={style['carousel-img']} src='brands/teraflex.jpeg' alt='BFGoodrich' />
                        <img className={style['carousel-img']} src='brands/rigit.png' alt='Poison Spyder Customs' />
                        <img className={style['carousel-img']} src='brands/oldMan.webp' alt='Poison Spyder Customs' />
                    </div>
                </Carousel.Item>

                <Carousel.Item id={style["carousel-item"]}>
                    <div className={style['carousel-item-div']}>
                        <img className={style['carousel-img']} src='brands/fox.svg' alt='BFGoodrich' />
                        <img className={style['carousel-img']} src='brands/factor55.png' alt='Smittybilt' />
                        <img className={style['carousel-img']} src='brands/aev.png' alt='Poison Spyder Customs' />
                    </div>
                </Carousel.Item>
            </Carousel>
        </section>
    );
}

export default Partners;