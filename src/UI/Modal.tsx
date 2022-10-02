import style from './Modal.module.scss'
import '../assets/css/index.scss'

import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import { setActive } from '../store/slices/Modal_Slice';

import { motion } from 'framer-motion';



function Modal(){
    

    let dispatch = useDispatch();
    let modalActive = useSelector((state: any) => state.modal_slice.active)
    let modalBody = useSelector((state: any) => state.modal_slice.body)
    

    let constructInfoCiurses = () => {
        return(
            <div>
                <div className='fonts_onedays_40_black'>{modalBody.title}</div>
                <div className={style.questions}>
                    <p className={style.questions_heading + ' fonts_onedays_20_black'}>Актуальные вопросы:</p>
                    {constructQuestions}
                    <p className={style.price_heading + ' fonts_onedays_20_black'}>Сколько стоит?</p>
                    {constructPrice}
                </div>
            </div>
        )
    }

    let constructQuestions = modalBody.questions?.map((item: any) => {
        return(
            <div className={style.questions_item} key={item.question}>
                <p className={style.questions_item__question} onClick={e => myTest(e)}>{item.question}</p>
                <p className={style.questions_item__answer + ' fonts_steppe_15_black'}>{item.answer}</p>
            </div>
        );
    })
    let constructPrice = modalBody.prices?.map((item: any) => {
        return(
            <div className={style.price_item} key={item.name}>
                <p className={style.price_item__answer}>{item.name} - {item.price}</p>
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