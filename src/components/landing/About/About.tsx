import style from './About.module.scss'
import '../../../assets/css/index.scss'


function About(){

    return(
        <div className={style.about}>
            <div className="container">

                <div className={style.about_box}>
                    <div className={style.about_box__list}>
                        <p className={style.about_box__list_item + ' fonts_jost_0_8_black'}>
                            Математик, репетитор, блогер, жена, а также хозяйка кота Леонарда
                        </p>
                        <p className={style.about_box__list_item + ' fonts_jost_0_8_black'}>
                            Окончила Восточно-Сибирский Государственный Университет Технологий и Управления. 
                            По образованию математик-программист
                        </p>
                        <p className={style.about_box__list_item + ' fonts_jost_0_8_black'}>
                        Обучала ребят из Москвы, Санкт-Петербурга, Новосибирска, Красноярска, Якутска, Улан-Удэ, 
                        Йошкар-Олы, Анапы и даже из Риги (Латвия)
                        </p>
                        <p className={style.about_box__list_item + ' fonts_jost_0_8_black'}>
                            Работаю репетитором с 2015 года, с 2020 года полностью перешла на онлайн, cменила 3 города, 
                            на данный момент живу и работаю в Москве
                        </p>
                        <p className={style.about_box__list_item + ' fonts_jost_0_8_black'}>
                            Очень люблю преподавать, математику и преподавать математику 🧡
                        </p>
                    </div>
                    <div className={style.about_box__number}>
                        <p className={style.how_much + ' fonts_jost_0_8_black'}>Обучила учеников: </p>
                        <p className={style.number}> ›150 </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About;