import style from './VideoCourses.module.scss';
import './swiper.scss';
import '../../../assets/css/index.scss';

import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Button from '../../../UI/Button';



function VideoCourses(){
 

    return(
        <div className={style.video}>
            <div className={style.video_box}>

            <h1 className={'fonts_onedays_100_purple'}>Видео курсы</h1>   

            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                clickable: true,
                }}
                modules={[Pagination]}
                className="video_swiper"
            >
                <SwiperSlide>
                    <div>
                        <h1 className={'fonts_onedays_40_black'}>Экономическая Задача </h1>
                        <p className={'fonts_steppe_20_black'}>
                            Для тех, кто перешел в 10 или 11 класс 
                        </p>
                        <p className={'fonts_steppe_20_black'}>
                            Для тех, кто планирует сдавать профильную математику
                        </p>
                        <p className={'fonts_steppe_20_black'}>
                            Для тех, кто хочет научиться решать задание номер 15 из профиля
                        </p>
                    </div>
                    <div>
                    <Button 
                        color={'rgb(40, 40, 40)'} 
                        background={'rgba(0,0,0,0)'} 
                        width={'15rem'} 
                        border={'2px solid rgb(40, 40, 40)'}
                    >Подробнее</Button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <h1 className={'fonts_onedays_40_black'}>Текстовая Задача </h1>
                        <p className={'fonts_steppe_20_black'}>
                            Для тех, кто перешел в 8, 9, 10 или 11 класс 
                        </p>
                        <p className={'fonts_steppe_20_black'}>
                            Для тех, кто не умеет решать задачи или нужен формат обуения "с нуля"
                        </p>
                        <p className={'fonts_steppe_20_black'}>
                            Для тех, кто будет сдавать профильную математику или ОГЭ
                        </p>
                        <p className={'fonts_steppe_20_black'}>
                            Для тех, кто хочет научиться решать задания номер 1, 11 из профиля или 21 из ОГЭ
                        </p>
                    </div>
                    <div>
                    <Button 
                        color={'rgb(40, 40, 40)'} 
                        background={'rgba(0,0,0,0)'} 
                        width={'15rem'} 
                        border={'2px solid rgb(40, 40, 40)'}
                    >Подробнее</Button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <h1 className={'fonts_onedays_40_black'}>Графика</h1>
                        <p className={'fonts_steppe_20_black'}>
                            Для тех, кто перешел в 8, 9, 10 или 11 класс 
                        </p>
                        <p className={'fonts_steppe_20_black'}>
                            Для тех, кто не умеет решать задачи или нужен формат обуения "с нуля"
                        </p>
                        <p className={'fonts_steppe_20_black'}>
                            Для тех, кто будет сдавать профильную математику или ОГЭ
                        </p>
                        <p className={'fonts_steppe_20_black'}>
                            Для тех, кто хочет научиться решать задания номер 1, 11 из профиля или 21 из ОГЭ
                        </p>
                    </div>
                    <div>
                    <Button 
                        color={'rgb(40, 40, 40)'} 
                        background={'rgba(0,0,0,0)'} 
                        width={'15rem'} 
                        border={'2px solid rgb(40, 40, 40)'}
                    >Подробнее</Button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <h1 className={'fonts_onedays_40_black'}>Вероятность </h1>
                        <p className={'fonts_steppe_20_black'}>
                            Для тех, кто перешел в 8, 9, 10 или 11 класс 
                        </p>
                        <p className={'fonts_steppe_20_black'}>
                            Для тех, кто не умеет решать задачи или нужен формат обуения "с нуля"
                        </p>
                        <p className={'fonts_steppe_20_black'}>
                            Для тех, кто будет сдавать профильную математику или ОГЭ
                        </p>
                        <p className={'fonts_steppe_20_black'}>
                            Для тех, кто хочет научиться решать задания номер 1, 11 из профиля или 21 из ОГЭ
                        </p>
                    </div>
                    <div>
                    <Button 
                        color={'rgb(40, 40, 40)'} 
                        background={'rgba(0,0,0,0)'} 
                        width={'15rem'} 
                        border={'2px solid rgb(40, 40, 40)'}
                    >Подробнее</Button>
                    </div>
                </SwiperSlide>
            </Swiper>
                
            </div>
        </div>
    )
}
export default VideoCourses;