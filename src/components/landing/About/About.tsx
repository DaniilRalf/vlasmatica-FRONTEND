import style from './About.module.scss'
import '../../../assets/css/index.scss'

import { useState } from 'react';

import { motion } from 'framer-motion';


// ANIMATION=============================
    const animationLeft = {
        hidden: {
            rotate: 0
        },
        visible: {
            rotate: -3.5
        }
    }
    const animationRigth = {
        hidden: {
            rotate: 0
        },
        visible: {
            rotate: 3.5
        }
    }

// ANIMATION=============================


function About(){

    let [counter, setCounter] = useState(0)
   

    return(
        <div className={style.about}>
            <div className="container">

                <div className={style.about_box}>


                    <h1 className={'fonts_onedays_100_purple'}>Кто я?</h1>

                    <motion.div  
                        className={style.about_box__item_p + ' ' + style.about_box__item} 
                        initial="hidden" 
                        whileInView="visible"
                        variants={animationLeft}
                        transition={{ ease: "easeOut", duration: 1 }}
                        >
                            <div className={style.number}>01.</div>
                            <div className={style.text}>
                                Математик, репетитор, блогер, жена, а также хозяйка кота Леонарда
                            </div>
                    </motion.div>

                    <motion.div 
                        className={style.about_box__item_r + ' ' + style.about_box__item}
                        whileInView="visible"
                        variants={animationRigth}
                        transition={{ ease: "easeOut", duration: 1 }}
                        >
                            <div className={style.number}>02.</div>
                            <div className={style.text}>
                                Окончила Восточно-Сибирский Государственный Университет Технологий и Управления. 
                                По образованию математик-программист
                            </div>
                    </motion.div>

                    <motion.div 
                        className={style.about_box__item_o + ' ' + style.about_box__item}
                        whileInView="visible"
                        variants={animationLeft}
                        transition={{ ease: "easeOut", duration: 1 }}>
                            <div className={style.number}>03.</div>
                            <div className={style.text}>
                                Обучала ребят из Москвы, Санкт-Петербурга, Новосибирска, Красноярска, Якутска, Улан-Удэ, 
                                Йошкар-Олы, Анапы и даже из Риги (Латвия)
                            </div>
                    </motion.div>

                    <motion.div 
                        className={style.about_box__item_r + ' ' + style.about_box__item}
                        whileInView="visible"
                        variants={animationRigth}
                        transition={{ ease: "easeOut", duration: 1 }}
                        >
                            <div className={style.number}>04.</div>
                            <div className={style.text}>
                                Работаю репетитором с 2015 года, с 2020 года полностью перешла на онлайн, cменила 3 города, 
                                на данный момент живу и работаю в Москве
                            </div>
                    </motion.div>

                    <motion.div 
                        className={style.about_box__item_p + ' ' + style.about_box__item}
                        whileInView="visible"
                        variants={animationLeft}
                        transition={{ ease: "easeOut", duration: 1 }}
                        >
                            <div className={style.number}>05.</div>
                            <div className={style.text}>
                                Очень люблю преподавать, математику и преподавать математику 🧡
                            </div>
                    </motion.div>



                    <div className={style.how}>
                        <p className={style.text + ' fonts_onedays_100_purple'}>Обучила учеников:</p>
                        <p className={style.number} id='counter'>{'>'}150</p>
                    </div>
                   
                </div>

            </div>
        </div>
    )
}

export default About;