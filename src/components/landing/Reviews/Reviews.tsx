import style from './Reviews.module.scss';
import './swiper.scss';
import '../../../assets/css/index.scss';

import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import rev_1 from '../../../assets/img/reviews/review_1.png';
import rev_2 from '../../../assets/img/reviews/review_2.png';
import rev_3 from '../../../assets/img/reviews/review_3.png';
import rev_4 from '../../../assets/img/reviews/review_4.png';
import rev_5 from '../../../assets/img/reviews/review_5.png';
import rev_6 from '../../../assets/img/reviews/review_6.png';
import rev_7 from '../../../assets/img/reviews/review_7.png';




function Reviews(){

    

    return(
        <div className={style.reviews}>
            <div className={style.reviews_box}>

            <h1 className={'fonts_onedays_40_black'}>Отзывы моих учеников</h1>   

            <Swiper
                slidesPerView={5}
                spaceBetween={30}
                slidesPerGroup={1}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="review_swiper"
            >
                <SwiperSlide><img src={rev_1} alt="review 1" /></SwiperSlide>
                <SwiperSlide><img src={rev_2} alt="review 2" /></SwiperSlide>
                <SwiperSlide><img src={rev_3} alt="review 3" /></SwiperSlide>
                <SwiperSlide><img src={rev_4} alt="review 4" /></SwiperSlide>
                <SwiperSlide><img src={rev_5} alt="review 5" /></SwiperSlide>
                <SwiperSlide><img src={rev_6} alt="review 6" /></SwiperSlide>
                <SwiperSlide><img src={rev_7} alt="review 7" /></SwiperSlide>
            </Swiper>
                
            </div>
        </div>
    )
}
export default Reviews;