import style from './Personal.module.scss'
import '../../../assets/css/index.scss'


function Personal(){

    return(
        <div className={style.personal}>
            <div className="container">
                
                <div className={style.personal_box}>
                    <div className={style.personal_box__list}>
                        <h1 className={'main_section_heading'}>Индивидуальные занятия</h1>
                    </div>
                    <div className={style.personal_box__priorities}>gsdfs</div>
                </div>

            </div>
        </div>
    )
}

export default Personal;