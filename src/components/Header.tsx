import style from './Header.module.scss'
import '../assets/css/index.scss'
import Social from '../UI/Social';
import { useState } from 'react';

import tt from '../assets/img/icons/tt.png';
import tg from '../assets/img/icons/tg.png';
import inst from '../assets/img/icons/inst.png';
import vk from '../assets/img/icons/vk.png';
import burger from '../assets/img/burger-menu.png';

import { motion } from 'framer-motion';

function Header(props:any){

    // SCROL TO PAGE--------------------------------------------
        const buttonHandler = (ref: any) => {
            ref.current.scrollIntoView({ behavior: "smooth" });
        };
    // SCROL TO PAGE--------------------------------------------

    // ANIMATION------------------------------------------------
        const animation = {
            visible: {
                height: 140,
                transition: {
                    delay: .1
                }
            },
            hidden: { 
                height: 0,
            },
        }
        const animationRev = {
            visible: { 
                height: 0,
            },
            hidden: {
                height: 140,
                transition: {
                    delay: .1
                }
            },
        }

        let [test, setTest] = useState<any>(undefined);
        let [buffer, setBuffer] = useState<any>(0);

        let click = () => {
            if(buffer == 0){
                setTest(animation)
                setBuffer(1)
            }  
            if(buffer == 1) {
                setTest(animationRev)
                setBuffer(0)
            }

            
        }
    // ANIMATION------------------------------------------------


    return(
        <div className={style.header}>
            <div className="container">

            <div className={style.header_content}>

                <div className={style.header_box}>
                    <div 
                        className={style.header_box__logo + ' fonts_onedays_20_white'}
                        onClick={() => {buttonHandler(props.refMain); click()}}
                    >
                        @vlasmatica
                    </div>
                    <div className={style.header_box__menu}>
                        <div 
                            className={style.header_box__menu_item + ' fonts_steppe_15_black'} 
                            onClick={() => buttonHandler(props.refCourses)}
                        >Курсы</div>
                        <div 
                            className={style.header_box__menu_item + ' fonts_steppe_15_black'}
                            onClick={() => buttonHandler(props.refAbout)}
                        >Обо мне</div>
                        <div 
                            className={style.header_box__menu_item + ' fonts_steppe_15_black'}
                            onClick={() => buttonHandler(props.refReviews)}
                        >Отзывы</div>
                    </div>
                    <div className={style.social_custom}>
                        <div className={style.header_box__login + ' fonts_steppe_15_black'}>
                            Учебный кабинет
                        </div>
                        <Social></Social>
                    </div>




                    <div onClick={() => click()} className={style.burger_menu}>
                        <img src={burger} alt=""/>
                    </div>
                </div>

                <motion.div 
                    className={style.header_menu}
                    variants={test}
                    initial='hidden'
                    animate='visible'
                >
                    <div className={style.header_menu_link}>
                        <p 
                            className={style.header_menu_link__item} 
                            onClick={() => {buttonHandler(props.refCourses); click()}}
                        >Курсы
                        </p>
                        <p 
                            className={style.header_menu_link__item}
                            onClick={() => {buttonHandler(props.refAbout); click()}}
                        >Обо мне
                        </p>
                        <p 
                            className={style.header_menu_link__item}
                            onClick={() => {buttonHandler(props.refReviews); click()}}
                        >Отзывы
                        </p>
                        <p 
                            className={style.header_menu_link__item}
                        >Учебный кабинет
                        </p>
                    </div>

                    <div className={style.header_menu_social}>
                        <img src={tg} alt="" className={style.header_menu_social__item} />
                        <img src={tt} alt="" className={style.header_menu_social__item} />
                        <img src={inst} alt="" className={style.header_menu_social__item} />
                        <img src={vk} alt="" className={style.header_menu_social__item} />
                    </div>
                    
                </motion.div>

            </div>
                
                

            </div>
        </div>
    )
}
export default Header;