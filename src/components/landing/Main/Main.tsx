import style from './Main.module.scss'
import '../../../assets/css/index.scss'
import photo from '../../../assets/img/photo_1.png';
import Button from '../../../UI/Button';

function Main(){

    return(
        <div className={style.main}>
            <div className="container">
                
                <div className={style.main_box}>
                    <div className={style.main_box__img}>
                        <img src={photo} alt="my photo" />
                    </div>
                    <div className={style.main_box__btn}>
                        <h1 className={'main_section_heading'}>Арюна Власова <br/>Репетитор по математике</h1>
                        <Button>Годовой онлайн курс “ОГЭ 2022-2023”</Button>
                        <Button><p>Курс в записи</p> “Экономическая задача”</Button>
                        <Button><p>Курс в записи</p> “Текстовые задачи”</Button>
                        <Button><p>Курс в записи</p> “Вероятность”</Button>
                        <Button><p>Курс в записи</p> “Графики”</Button>
                        <Button>Индивидуальные занятия</Button>
                    </div>
                </div>

                <p className={style.who}>Кто я?</p>

            </div>
        </div>
    )
}

export default Main;