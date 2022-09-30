import style from './Personal.module.scss';
import '../../../assets/css/index.scss';
import Button from '../../../UI/Button';

import arrow_1 from '../../../assets/img/arrow_1.svg';
import arrow_2 from '../../../assets/img/arrow_2.svg';
import arrow_3 from '../../../assets/img/arrow_3.svg';
import arrow_4 from '../../../assets/img/arrow_4.svg';
import arrow_5 from '../../../assets/img/arrow_5.svg';

import {useDispatch} from "react-redux";
import { setActive, setBody } from '../../../store/slices/Modal_Slice';

import aboutCourse from "../_courses-detalization/personal.json"

import { motion } from 'framer-motion';


const animationMain = {
    hidden: {
        x: 400,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1, 
    }
}


function Personal(){

    // OPEN-MODAL================================
    let dispatch = useDispatch();
    let newModal = () => {
        dispatch(setActive(true));
        dispatch(setBody(aboutCourse))
    }
    // OPEN-MODAL================================



    return(
        <div className={style.personal}>
            <div className="container">
                
                <div className={style.personal_box}>
                    <div className={style.personal_box__list}>
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
                                onClick={() => newModal()}
                        >Подробнее</Button>
                    </div>
                    <motion.div 
                        className={style.personal_box__priorities}
                        initial="hidden" 
                        whileInView="visible"
                        variants={animationMain}
                    >
                        <div className={style.personal_box__priorities_contain}>

                            <div className={style.item_contain_left}>
                                <div className={style.txt + ' fonts_steppe_15_black'}>
                                    Я буду объяснять до тех пор, пока ученик не поймет. Хоть 10, хоть 20, хоть 100 раз.
                                </div>
                                <div></div>
                            </div>

                            <div className={style.item_contain_rigth}>
                                <div></div>
                                <div className={style.txt + ' fonts_steppe_15_black'}>
                                    Занятия проходят в формате онлайн, связываемся любым удобным способом (WhatsApp, ВК, Skype,Discord) и 
                                    подключаемся к онлайн-доске Sboard. Таким образом ученик меня видит, слышит, может писать и видит мои записи. 
                                    Все как на обычном уроке).
                                </div>
                            </div>

                            <div className={style.item_contain_left}>
                                <div className={style.txt + ' fonts_steppe_15_black'}>
                                    Заниматься можно либо с компьютера с мышкой, либо с планшета со стилусом.
                                </div>
                                <div></div>
                            </div>

                            <div className={style.item_contain_rigth}>
                                <div></div>
                                <div className={style.txt + ' fonts_steppe_15_black'}>
                                    Всегда будут задания на дом для закрепления изученного материала.
                                </div>
                            </div>

                            <div className={style.item_contain_left}>
                                <div className={style.txt + ' fonts_steppe_15_black'}>
                                    Все теоретические материалы я предоставляю.
                                </div>
                                <div></div>
                            </div>

                            <div className={style.item_contain_rigth}>
                                <div></div>
                                <div className={style.txt + ' fonts_steppe_15_black'}>
                                    За день до занятия напоминаю с помощью сообщения.
                                </div>
                            </div>

                            <img className={style.arrow_1} src={arrow_1} alt="" />
                            <img className={style.arrow_2} src={arrow_2} alt="" />
                            <img className={style.arrow_3} src={arrow_3} alt="" />
                            <img className={style.arrow_4} src={arrow_4} alt="" />
                            <img className={style.arrow_5} src={arrow_5} alt="" />

                        </div>
                    </motion.div>
                </div>

            </div>
        </div>
    )
}

export default Personal;