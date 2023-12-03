import style from "./Benefits.module.css"

const Benefits = () => {
    return (
        <section className={style["benefits-section"]}>
            <h2 className={style["benefits-section-title"]}>What you get when you chose us?</h2>
            <ul className={style["benefits-section-list"]}>
                <li className={style["benefits-section-list-item"]}>
                    <img className={style["benefits-section-list-item-img"]} src="https://di-uploads-pod9.s3.amazonaws.com/keenechryslerdodgejeepramdiwebsite/uploads/2016/11/wrangler-parts.jpg" alt="" /> 
                    <h3 className={style["benefits-section-list-item-title"]}>Top-Quality Gear for Off-Road Warriors</h3>
                    <p className={style["benefits-section-list-item-description"]}>Discover a treasure trove of off-road gear and accessories to enhance your ride. Our market is home to top-quality equipment, safety gear, navigation tools, and more, ensuring that you're equipped for every off-road challenge.</p>
                </li>

                <li className={style["benefits-section-list-item"]}>
                    <img className={style["benefits-section-list-item-img"]} src="https://www.floridacareercollege.edu/wp-content/uploads/sites/4/2020/06/3-Reasons-Why-Being-a-Mechanic-Could-Be-An-Amazing-Career-Florida-Career-College.jpeg" alt="" /> 
                    <h3 className={style["benefits-section-list-item-title"]}>Gear Up with Expert Advice</h3>
                    <p className={style["benefits-section-list-item-description"]}>Whether you're a gearhead or a novice, our platform offers valuable insights into the latest off-road vehicles, equipment, and accessories. From expert reviews to user recommendations, make informed decisions to enhance your off-road experience.</p>
                </li>

                <li className={style["benefits-section-list-item"]}>
                    <img className={style["benefits-section-list-item-img"]} src="https://tfloffroad.com/wp-content/uploads/2019/04/IMG_2094.jpg" alt="" /> 
                    <h3 className={style["benefits-section-list-item-title"]}>Capture and Share Your Moments</h3>
                    <p className={style["benefits-section-list-item-description"]}>Document your off-road conquests with our multimedia features. Share jaw-dropping photos, heart-pounding videos, and memorable stories from your off-road escapades. Inspire others to hit the trails and create lasting memories.</p>
                </li>

                <li className={style["benefits-section-list-item"]}>
                    <img className={style["benefits-section-list-item-img"]} src="https://hips.hearstapps.com/hmg-prod/images/two-people-reaching-an-agreement-about-a-car-sale-royalty-free-image-1665671206.jpg" alt="" /> 
                    <h3 className={style["benefits-section-list-item-title"]}>Connect with Trusted Sellers</h3>
                    <p className={style["benefits-section-list-item-description"]}>Shop with confidence from our network of trusted sellers and brands. Each product in our marketplace is handpicked to meet the highest standards of quality, durability, and performance. Read reviews from fellow off-road enthusiasts to make informed decisions.</p>
                </li>

                <li className={style["benefits-section-list-item"]}>
                    <img className={style["benefits-section-list-item-img"]} src="https://c0.wallpaperflare.com/preview/813/626/379/offroad-auto-field-the-vehicle.jpg" alt="" /> 
                    <h3 className={style["benefits-section-list-item-title"]}>Unleash Your Off-Road Spirit</h3>
                    <p className={style["benefits-section-list-item-description"]}>Embark on a journey through our extensive trail network, showcasing some of the most challenging and scenic routes for off-road enthusiasts. Whether you prefer mud-splattered trails, rocky climbs, or sandy dunes, we've got the perfect path for your next adventure.</p>
                </li>

                <li className={style["benefits-section-list-item"]}>
                    <img className={style["benefits-section-list-item-img"]} src="https://www.extremeterrain.com/globalassets/wrangler/homepage_blocks/generic/experts_2.jpg" alt="" />
                    <h3 className={style["benefits-section-list-item-title"]}>Connect with the Off-Road Tribe</h3>
                    <p className={style["benefits-section-list-item-description"]}>Join forces with a diverse community of off-road aficionados who share your passion. From seasoned trailblazers to those just getting their tires dirty, our forums and events connect you with like-minded individuals. Swap stories, share tips, and forge lasting friendships with fellow off-road explorers.</p>
                </li>
            </ul>
        </section>
    );
}

export default Benefits;