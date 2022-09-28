import style from './Main.module.scss'
import '../../../assets/css/index.scss'
import photo from '../../../assets/img/photo_1.png';
import Button from '../../../UI/Button';
import Modal from '../../../UI/Modal';


function Main(){

    return(
        <div className={style.main}>
            <div className="container">
                
                <div className={style.main_box}>
                    <div className={style.main_box__info}>
                        <h1 className={'fonts_onedays_150_black'}>Арюна Власова</h1>
                        <p className={style.new + ' fonts_steppe_30_white'}>Ваш новый репетитор по математике</p>
                        <div className={style.btn}>
                            <Button 
                                color={'#FFF9F3'} 
                                background={'linear-gradient(90.88deg, rgba(27, 38, 56, 0.48) 0.52%, rgba(45, 76, 126, 0.48) 99.51%)'} 
                                width={'22rem'} 
                                border={'none'}
                            >Годовой онлайн курс “ОГЭ 2022-2023” </Button>
                            <Button 
                                color={'#FFF9F3'} 
                                background={'rgba(0,0,0,0)'} 
                                width={'22rem'} 
                                border={'2px solid #FFF9F3'}
                            >Индивидуальные занятия</Button>
                        </div>
                    </div>
                    <div className={style.main_box__img}>
                        <img src={photo} alt="my photo" />
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Main;