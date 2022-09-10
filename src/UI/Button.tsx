import style from './Button.module.scss'
import '../assets/css/index.scss'



function Button({children, ...props}: {children: string} & any){
    
    return(
        <button {...props} className={style.button}>
            {children}
        </button>
    )
}

export default Button;