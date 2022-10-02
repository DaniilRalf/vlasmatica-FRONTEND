import style from './Main.module.scss'
import '../../../assets/css/index.scss'
import photo from '../../../assets/img/photo_1.png';
import Button from '../../../UI/Button';

import { motion } from 'framer-motion';


const animationMain = {
    hidden: {
        x: -400,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1, 
    }
}


function Main(props: any){


    // SCROL TO PAGE--------------------------------------------
        const buttonHandler = (ref: any) => {
            ref.current.scrollIntoView({ behavior: "smooth" });
        };
    // SCROL TO PAGE--------------------------------------------


    return(
        <div className={style.main}>
            <div className="container">
                
                <motion.div 
                className={style.main_box}
                initial="hidden" 
                whileInView="visible"
                // transition={{ ease: "easeOut", duration: .1 }}
                >
                    <motion.div className={style.main_box__info} variants={animationMain}>
                        <h1 className={'fonts_onedays_150_black'}>Арюна Власова</h1>
                        <p className={style.new + ' fonts_steppe_30_white'}>Ваш новый репетитор по математике</p>
                        <div className={style.btn}>
                            <Button 
                                color={'#FFF9F3'} 
                                background={'linear-gradient(90.88deg, rgba(27, 38, 56, 0.48) 0.52%, rgba(45, 76, 126, 0.48) 99.51%)'} 
                                width={'22rem'} 
                                border={'none'}
                                onClick={() => buttonHandler(props.refYear)}
                            >Годовой онлайн курс “ОГЭ 2022-2023” </Button>
                            <Button 
                                color={'#FFF9F3'} 
                                background={'rgba(0,0,0,0)'} 
                                width={'22rem'} 
                                border={'2px solid #FFF9F3'}
                                onClick={() => buttonHandler(props.refPersonal)}
                            >Индивидуальные занятия</Button>
                        </div>
                    </motion.div>
                    <div className={style.main_box__img}>
                        <img src={photo} alt="my photo" />
                    </div>
                </motion.div>
                
            </div>
        </div>
    )
}

export default Main;