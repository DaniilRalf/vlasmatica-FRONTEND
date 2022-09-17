import style from './Year.module.scss';
import '../../../assets/css/index.scss';
import Button from '../../../UI/Button';

import arynaPhoto from '../../../assets/img/photo_2.png';


function Year(){

    return(
        <div className={style.year}>
            <div className="container">
                
                <div className={style.year_box}>
                    <div className={style.year_box__text}>
                    <h1 className={'fonts_onedays_40_white'}>Годовой онлайн курс ”ОГЭ 2022-2023”</h1>
                        <div>
                            <p className={style.year_box__text_item + ' fonts_steppe_20_white'}>
                                Для тех, кто перешел в 9 класс  
                            </p>
                            <p className={style.year_box__text_item + ' fonts_steppe_20_white'}>
                                Для тех, кто хочет получить 5 и подготовиться без нервов и страданий
                            </p>
                            <p className={style.year_box__text_item + ' fonts_steppe_20_white'}>
                                Для тех, кто не верит, что математику можно понять и полюбить
                            </p>
                            <p className={style.year_box__text_item + ' fonts_steppe_20_white'}>
                                Для тех, кому нужен формат подготовки «c нуля»
                            </p>
                        </div>
                        <Button 
                                color={'#FFF9F3'} 
                                background={'linear-gradient(90.88deg, rgba(27, 38, 56, 0.48) 0.52%, rgba(45, 76, 126, 0.48) 99.51%)'} 
                                width={'10rem'} 
                                border={'none'}
                        >Подробнее</Button>
                    </div>
                    <div className={style.year_box__img}></div>
                    <img src={arynaPhoto} alt="Aryuna photo" />
                </div>

            </div>
        </div>
    )
}

export default Year;