import style from './Arrow.module.scss'
import '../assets/css/index.scss'



interface ArrowProps{
    color: string
}

function Arrow({ color }: ArrowProps){
    
    return(
        <span className={style.arrow}>
            <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.16864 22.2014H21.1545L2.74523 4.11819L0.171387 6.69213L11.0963 16.8162L1.24961 17.2824L6.16864 22.2014Z" 
                fill={color}/>
            <path d="M21.1061 22.2501L21.1061 7.26418L16.1871 2.34514L15.6723 12.2404L5.14782 1.71594L3.34132 3.52244L2.57391 4.28985L21.1061 22.2501Z" 
                fill={color}/>
            </svg>
        </span>
    )
}

export default Arrow;