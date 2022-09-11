import style from './Button.module.scss'
import '../assets/css/index.scss'



// interface ButtonProps{
    
// }

function Button({children, color, background, width, borderColor, border, ...props}: any){

    let myStyle = {
        color: color,
        background: background,
        width: width,
        border: border,
      };
    
    return(
        <button {...props} 
            className={style.button}
            style={myStyle}
        >
            {children}
        </button>
    )
}

export default Button;