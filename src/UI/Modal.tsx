import style from './Modal.module.scss'
import '../assets/css/index.scss'

import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import { setActive } from '../store/slices/Modal_Slice';



function Modal(){

    let dispatch = useDispatch();
    let modalActive = useSelector((state: any) => state.modal_slice.active)
    let modalBody = useSelector((state: any) => state.modal_slice.body)


    let test = [
        {vopr: 'vopros1', otvet: 'otvet1'},
        {vopr: 'vopros2', otvet: 'otvet2'},
        {vopr: 'vopros3', otvet: 'otvet3'},
    ]


    let constructInfoCiurses = () => {
        return(
            <div>
                <div className={style.questions}>
                    <p className={style.questions_heading}>Актуальные вопросы:</p>
                    {constructQuestions}
                </div>


                <div className={style.price}>asdfasd</div>
                <div className={style.social}>asdfasd</div>
            </div>
        )
    }

    let constructQuestions = test.map((item: any) => {
        return(
            <div className={style.questions_item} key={item.vopr}>
                <p className={style.questions_item__question} onClick={e => myTest(e)}>{item.vopr}</p>
                <p className={style.questions_item__answer}>{item.otvet}</p>
            </div>
        );
    })

    let myTest = (e: any) => {
        let element = e.target.parentElement.style.height;
        if(element == '2.4rem' || element == ''){
            e.target.parentElement.style.height = '100%'
            return
        }
        if(element == '100%'){
            e.target.parentElement.style.height = '2.4rem';
            return
        }
        
        
    }


    return(
        <div 
            className={modalActive ? style.modal : style.nomodal}
            onClick={() => dispatch(setActive(false))}
        >
                <div 
                    className={style.modal_box}
                    onClick={e => e.stopPropagation()}
                >
                    {constructInfoCiurses()}
                </div>
        </div>
    )
}

export default Modal;