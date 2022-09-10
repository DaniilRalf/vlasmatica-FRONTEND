import style from './Header.module.scss'
import '../assets/css/index.scss'

function Header(){

    return(
        <div className={style.header}>
            <div className="container">
                
                <div className={style.header_box}>
                    <div className={style.header_box__logo + ' header_heading'}>
                        @vlasmatica
                    </div>
                    <div className={style.header_box__menu}>
                        <div className={style.header_box__menu_item + ' header_menu'}>Курсы</div>
                        <div className={style.header_box__menu_item + ' header_menu'}>Обо мне</div>
                        <div className={style.header_box__menu_item + ' header_menu'}>Отзывы</div>
                    </div>
                    <div className={style.header_box__login}>
                        личный кабинет
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Header;