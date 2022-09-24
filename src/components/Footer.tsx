import style from './Footer.module.scss'
import '../assets/css/index.scss'

function Footer(){

    return(
        <div className={style.footer}>
            <div className="container">
                
                <div className={style.footer_box}>
                    <div className={style.footer_box__year + ' fonts_steppe_20_black'}>2018-2022  г. Москва</div>
                    <div className={style.footer_box__name + ' fonts_steppe_20_black'}>VLASMATICA</div>
                    <div className={style.footer_box__politics + ' fonts_steppe_20_black'}>Политика конфиденциальности</div>
                </div>

            </div>
        </div>
    )
}
export default Footer;