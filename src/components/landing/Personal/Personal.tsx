import style from './Personal.module.scss';
import '../../../assets/css/index.scss';
import arrowLeft from '../../../assets/img/arrow-left.svg';
import arrowRigth from '../../../assets/img/arrow-rigth.svg';
import Button from '../../../UI/Button';


function Personal(){

    return(
        <div className={style.personal}>
            <div className="container">
                
                <div className={style.personal_box}>
                    <div className={style.personal_box__list}>
                        <h1 className={'fonts_onedays_1_8_white'}>Индивидуальные занятия</h1>
                        <p className={style.personal_box__list_item + ' fonts_onedays_0_7_white'}>
                            Подготовка к ЕГЭ – профильная  
                        </p>
                        <p className={style.personal_box__list_item + ' fonts_onedays_0_7_white'}>
                            Подготовка к ЕГЭ – базовая математика  
                        </p>
                        <p className={style.personal_box__list_item + ' fonts_onedays_0_7_white'}>
                            Подготовка к ОГЭ
                        </p>
                        <p className={style.personal_box__list_item + ' fonts_onedays_0_7_white'}>
                            Занятия по школьной программе (4-11 класс)
                        </p>
                        <p className={style.personal_box__list_item + ' fonts_onedays_0_7_white'}>
                            Подготовка к контрольным, самостоятельным, ВПР
                        </p>

                        <Button><p>узнать подробности</p>Стоимость</Button>
                    </div>
                    <div className={style.personal_box__priorities}>
                        <div className={style.personal_box__priorities_contain}>

                            <div className={style.item_contain_left}>
                                <div className={style.txt + ' fonts_jost_0_8_black'}>
                                    Я буду объяснять до тех пор, пока ученик не поймет. Хоть 10, хоть 20, хоть 100 раз.
                                </div>
                                <div></div>
                            </div>

                            <div className={style.item_contain_rigth}>
                                <img src={arrowRigth} alt="" />
                                <div className={style.txt + ' fonts_jost_0_8_black'}>
                                    Занятия проходят в формате онлайн, связываемся любым удобным способом (WhatsApp, ВК, Skype,Discord) и 
                                    подключаемся к онлайн-доске Sboard. Таким образом ученик меня видит, слышит, может писать и видит мои записи. 
                                    Все как на обычном уроке).
                                </div>
                            </div>

                            <div className={style.item_contain_left}>
                                <div className={style.txt + ' fonts_jost_0_8_black'}>
                                    Заниматься можно либо с компьютера с мышкой, либо с планшета со стилусом.
                                </div>
                                <img src={arrowLeft} alt="" />
                            </div>

                            <div className={style.item_contain_rigth}>
                                <img src={arrowRigth} alt="" />
                                <div className={style.txt + ' fonts_jost_0_8_black'}>
                                    Всегда будут задания на дом для закрепления изученного материала.
                                </div>
                            </div>

                            <div className={style.item_contain_left}>
                                <div className={style.txt + ' fonts_jost_0_8_black'}>
                                    Все теоретические материалы я предоставляю.
                                </div>
                                <img src={arrowLeft} alt="" />
                            </div>

                            <div className={style.item_contain_rigth}>
                                <img src={arrowRigth} alt="" />
                                <div className={style.txt + ' fonts_jost_0_8_black'}>
                                    За день до занятия напоминаю с помощью сообщения.
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Personal;