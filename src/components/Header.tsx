import style from './Header.module.scss'
import '../assets/css/index.scss'
import Social from '../UI/Social';

function Header(props:any){

    // SCROL TO PAGE--------------------------------------------
        const buttonHandler = (ref: any) => {
            ref.current.scrollIntoView({ behavior: "smooth" });
        };
    // SCROL TO PAGE--------------------------------------------


    return(
        <div className={style.header}>
            <div className="container">
                
                <div className={style.header_box}>
                    <div 
                        className={style.header_box__logo + ' fonts_onedays_20_white'}
                        onClick={() => buttonHandler(props.refMain)}
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
                </div>

            </div>
        </div>
    )
}
export default Header;