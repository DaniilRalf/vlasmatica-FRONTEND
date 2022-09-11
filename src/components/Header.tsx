import style from './Header.module.scss'
import '../assets/css/index.scss'

function Header(){

    return(
        <div className={style.header}>
            <div className="container">
                
                <div className={style.header_box}>
                    <div className={style.header_box__logo + ' fonts_onedays_1'}>
                        @vlasmatica
                    </div>
                    <div className={style.header_box__menu}>
                        <div className={style.header_box__menu_item + ' fonts_onedays_0_7_black'}>Курсы</div>
                        <div className={style.header_box__menu_item + ' fonts_onedays_0_7_black'}>Обо мне</div>
                        <div className={style.header_box__menu_item + ' fonts_onedays_0_7_black'}>Отзывы</div>
                    </div>
                    <div className={style.header_box__login + ' fonts_onedays_1'}>
                        личный кабинет
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Header;