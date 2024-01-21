import Carousel from 'react-bootstrap/Carousel';
import style from "./Partners.module.css"

function Partners() {
    return (
        <Carousel id={style["carousel"]}>
            <Carousel.Item id={style["carousel-item"]}>
                <div className={style['carousel-item-div']}>
                    <img className={style['carousel-img']} src='https://1000logos.net/wp-content/uploads/2020/08/Maxxis-Logo-old.png' alt='BFGoodrich' />
                    <img className={style['carousel-img']} src='https://tapstruck.com/wp-content/uploads/2022/03/Smittybilt.png' alt='Smittybilt' />
                    <img className={style['carousel-img']} src='https://international.warn.com/images/thumbs/0000166.gif' alt='Smittybilt' />
                </div>
            </Carousel.Item>

            <Carousel.Item>
                <div className={style['carousel-item-div']}>
                    <img className={style['carousel-img']} src='https://cdn.worldvectorlogo.com/logos/fox-racing-shox.svg' alt='BFGoodrich' />
                    <img className={style['carousel-img']} src='https://gtajeeps.ca/cdn/shop/products/JL4DHK-4.jpg?v=1688654234&width=1445' alt='Poison Spyder Customs' />
                    <img className={style['carousel-img']} src='https://www.aev-conversions.com/wp-content/themes/aev/assets/images/aev-header-logo@2x.png' alt='Poison Spyder Customs' />
                </div>
            </Carousel.Item>

            <Carousel.Item>
                <div className={style['carousel-item-div']}>
                    <img className={style['carousel-img']} src='https://www.thriftysigns.com/wp-content/uploads/2020/12/Teraflex.jpg' alt='BFGoodrich' />
                    <img className={style['carousel-img']} src='https://www.rigidindustries.com/media/logo/stores/1/RIGID_with_RED_DASH_Black.png' alt='Smittybilt' />
                    <img className={style['carousel-img']} src='https://www.factor55.com/images/thumbs/000/0000446_logo-factor55-notagline.png' alt='Poison Spyder Customs' />
                </div>
            </Carousel.Item>
        </Carousel>
    );
}

export default Partners;