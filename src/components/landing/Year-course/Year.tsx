import style from './Year.module.scss';
import '../../../assets/css/index.scss';
import Button from '../../../UI/Button';
import Arrow from '../../../UI/Arrow';

import arynaPhoto from '../../../assets/img/photo_2.png';
import yearCourse from '../_courses-detalization/year.json';

import {useDispatch} from "react-redux";
import { setActive, setBody } from '../../../store/slices/Modal_Slice';



function Year(){
    // OPEN-MODAL================================
        let dispatch = useDispatch();
        let newModal = () => {
            dispatch(setActive(true));
            dispatch(setBody(yearCourse))
        }
    // OPEN-MODAL================================



    return(
        <div className={style.year}>
            <div className="container">
                
                <div className={style.year_box}>
                    <div className={style.year_box__text}>
                    <h1 className={'fonts_onedays_40_white'}>Годовой онлайн курс ”ОГЭ 2022-2023”</h1>
                        <div> 
                            <p className={style.year_box__text_item + ' fonts_steppe_20_white'}>
                                <Arrow color={'white'}></Arrow> Для тех, кто перешел в 9 класс  
                            </p>
                            <p className={style.year_box__text_item + ' fonts_steppe_20_white'}>
                                <Arrow color={'white'}></Arrow> Для тех, кто хочет получить 5 и подготовиться без нервов и страданий
                            </p>
                            <p className={style.year_box__text_item + ' fonts_steppe_20_white'}>
                                <Arrow color={'white'}></Arrow> Для тех, кто не верит, что математику можно понять и полюбить
                            </p>
                            <p className={style.year_box__text_item + ' fonts_steppe_20_white'}>
                                <Arrow color={'white'}></Arrow> Для тех, кому нужен формат подготовки «c нуля»
                            </p>
                        </div>
                        <div className={style.btn_box}>
                            <Button 
                                    color={'#FFF9F3'} 
                                    background={'linear-gradient(90.88deg, rgba(27, 38, 56, 0.48) 0.52%, rgba(45, 76, 126, 0.48) 99.51%)'} 
                                    width={'10rem'} 
                                    border={'none'}
                                    onClick={() => newModal()}
                            >Подробнее</Button>
                        </div>
                    </div>
                    <div className={style.year_box__img}></div>
                    <img src={arynaPhoto} alt="Aryuna photo" />
                </div>

            </div>
        </div>
    )
}

export default Year;