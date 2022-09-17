import style from './VideoCourses.module.scss';
import './swiper.scss';
import '../../../assets/css/index.scss';

import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Button from '../../../UI/Button';



function VideoCourses(){

    let listCourses: any = []

    let construct = listCourses.map((i: any) => {
        return(
            <div>
                <h1 className={'fonts_onedays_40_white'}>Индивидуальные занятия</h1>
                <p className={style.personal_box__list_item + ' fonts_steppe_20_white'}>
                    Подготовка к ЕГЭ – профильная  
                </p>
                <p className={style.personal_box__list_item + ' fonts_steppe_20_white'}>
                    Подготовка к ЕГЭ – базовая математика  
                </p>
                <p className={style.personal_box__list_item + ' fonts_steppe_20_white'}>
                    Подготовка к ОГЭ
                </p>
                <p className={style.personal_box__list_item + ' fonts_steppe_20_white'}>
                    Занятия по школьной программе (4-11 класс)
                </p>
                <p className={style.personal_box__list_item + ' fonts_steppe_20_white'}>
                    Подготовка к контрольным, самостоятельным, ВПР
                </p>

                <Button 
                        color={'#FFF9F3'} 
                        background={'linear-gradient(90.88deg, rgba(27, 38, 56, 0.48) 0.52%, rgba(45, 76, 126, 0.48) 99.51%)'} 
                        width={'10rem'} 
                        border={'none'}
                >Подробнее</Button>
            </div>
            
        )
    })
        
            
        
    

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