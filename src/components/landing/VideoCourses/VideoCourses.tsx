import style from './VideoCourses.module.scss';
import './swiper.scss';
import '../../../assets/css/index.scss';

import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Button from '../../../UI/Button';
import Arrow from '../../../UI/Arrow';

import economicalCourse from '../_courses-detalization/economical.json'
import textCourse from '../_courses-detalization/text.json'
import probabilityCourse from '../_courses-detalization/probability.json'
import graphicCourse from '../_courses-detalization/graphic.json'

import {useDispatch} from "react-redux";
import { setActive, setBody } from '../../../store/slices/Modal_Slice';

import { motion } from 'framer-motion';



const animationMain = {
    hidden: {
        x: 200,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1, 
    }
}



function VideoCourses(){

    // OPEN-MODAL================================
    let dispatch = useDispatch();
    let newModal = (course: any) => {
        dispatch(setActive(true));
        dispatch(setBody(course))
    }
    // OPEN-MODAL================================
 
    console.log(document.documentElement.scrollWidth);
    

    return(
        <div className={style.video}>
            <div className={style.video_box}>

            <h1 className={'fonts_onedays_100_purple'}>Видео курсы</h1>   

            <motion.div 
                initial="hidden" 
                whileInView="visible"
                variants={animationMain}
                transition={{ ease: "easeOut", duration: 1 }}
            >
                    <Swiper
                        slidesPerView={ document.documentElement.scrollWidth > 1000 ? 3 : (
                            document.documentElement.scrollWidth > 800 ? 1.5 : (
                                document.documentElement.scrollWidth > 600 ? 0.8 : 0.4
                            )
                        )}
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
                                    <Arrow color={'rgb(40, 40, 40)'}></Arrow> Для тех, кто перешел в 10 или 11 класс 
                                </p>
                                <p className={'fonts_steppe_20_black'}>
                                    <Arrow color={'rgb(40, 40, 40)'}></Arrow> Для тех, кто планирует сдавать профильную математику
                                </p>
                                <p className={'fonts_steppe_20_black'}>
                                    <Arrow color={'rgb(40, 40, 40)'}></Arrow> Для тех, кто хочет научиться решать задание номер 15 из профиля
                                </p>
                            </div>
                            <div>
                            <Button 
                                color={'rgb(40, 40, 40)'} 
                                background={'rgba(0,0,0,0)'} 
                                width={'15rem'} 
                                border={'2px solid rgb(40, 40, 40)'}
                                onClick={() => newModal(economicalCourse)}
                            >Подробнее</Button>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <h1 className={'fonts_onedays_40_black'}>Текстовая Задача </h1>
                                <p className={'fonts_steppe_20_black'}>
                                    <Arrow color={'rgb(40, 40, 40)'}></Arrow> Для тех, кто перешел в 8, 9, 10 или 11 класс 
                                </p>
                                <p className={'fonts_steppe_20_black'}>
                                    <Arrow color={'rgb(40, 40, 40)'}></Arrow> Для тех, кто не умеет решать задачи или нужен формат обуения "с нуля"
                                </p>
                                <p className={'fonts_steppe_20_black'}>
                                    <Arrow color={'rgb(40, 40, 40)'}></Arrow> Для тех, кто будет сдавать профильную математику или ОГЭ
                                </p>
                                <p className={'fonts_steppe_20_black'}>
                                    <Arrow color={'rgb(40, 40, 40)'}></Arrow> Для тех, кто хочет научиться решать задания номер 1, 11 из профиля или 21 из ОГЭ
                                </p>
                            </div>
                            <div>
                            <Button 
                                color={'rgb(40, 40, 40)'} 
                                background={'rgba(0,0,0,0)'} 
                                width={'15rem'} 
                                border={'2px solid rgb(40, 40, 40)'}
                                onClick={() => newModal(textCourse)}
                            >Подробнее</Button>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <h1 className={'fonts_onedays_40_black'}>Графика</h1>
                                <p className={'fonts_steppe_20_black'}>
                                    <Arrow color={'rgb(40, 40, 40)'}></Arrow> Для тех, кто перешел в 8, 9, 10 или 11 класс 
                                </p>
                                <p className={'fonts_steppe_20_black'}>
                                    <Arrow color={'rgb(40, 40, 40)'}></Arrow> Для тех, кто не умеет решать задачи или нужен формат обуения "с нуля"
                                </p>
                                <p className={'fonts_steppe_20_black'}>
                                    <Arrow color={'rgb(40, 40, 40)'}></Arrow> Для тех, кто будет сдавать профильную математику или ОГЭ
                                </p>
                                <p className={'fonts_steppe_20_black'}>
                                    <Arrow color={'rgb(40, 40, 40)'}></Arrow> Для тех, кто хочет научиться решать задания номер 1, 11 из профиля или 21 из ОГЭ
                                </p>
                            </div>
                            <div>
                            <Button 
                                color={'rgb(40, 40, 40)'} 
                                background={'rgba(0,0,0,0)'} 
                                width={'15rem'} 
                                border={'2px solid rgb(40, 40, 40)'}
                                onClick={() => newModal(graphicCourse)}
                            >Подробнее</Button>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <h1 className={'fonts_onedays_40_black'}>Вероятность </h1>
                                <p className={'fonts_steppe_20_black'}>
                                    <Arrow color={'rgb(40, 40, 40)'}></Arrow> Для тех, кто перешел в 8, 9, 10 или 11 класс 
                                </p>
                                <p className={'fonts_steppe_20_black'}>
                                    <Arrow color={'rgb(40, 40, 40)'}></Arrow> Для тех, кто не умеет решать задачи или нужен формат обуения "с нуля"
                                </p>
                                <p className={'fonts_steppe_20_black'}>
                                    <Arrow color={'rgb(40, 40, 40)'}></Arrow> Для тех, кто будет сдавать профильную математику или ОГЭ
                                </p>
                                <p className={'fonts_steppe_20_black'}>
                                    <Arrow color={'rgb(40, 40, 40)'}></Arrow> Для тех, кто хочет научиться решать задания номер 1, 11 из профиля или 21 из ОГЭ
                                </p>
                            </div>
                            <div>
                            <Button 
                                color={'rgb(40, 40, 40)'} 
                                background={'rgba(0,0,0,0)'} 
                                width={'15rem'} 
                                border={'2px solid rgb(40, 40, 40)'}
                                onClick={() => newModal(probabilityCourse)}
                            >Подробнее</Button>
                            </div>
                        </SwiperSlide>
                    </Swiper>
            </motion.div>
                
            </div>
        </div>
    )
}
export default VideoCourses;