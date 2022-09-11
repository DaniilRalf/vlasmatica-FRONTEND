import style from './VideoCourses.module.scss';
import '../../../assets/css/index.scss';



function VideoCourses(){

    return(
        <div className={style.video}>
            <div className="container">
                
                <div className={style.video_box}>

                    <h1 className={'fonts_onedays_1_8_black'}>Индивидуальные занятия</h1>
                    <div className={style.video_box__contain}>
                        <div className={style.video_box__contain_item}>asc</div>
                        <div className={style.video_box__contain_item}>asc</div>
                        <div className={style.video_box__contain_item}>asc</div>
                        <div className={style.video_box__contain_item}>asc</div>
                    </div>
                    
                </div>

            </div>
        </div>
    )
}

export default VideoCourses;