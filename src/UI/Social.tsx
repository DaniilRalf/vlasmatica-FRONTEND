import style from './Social.module.scss'
import '../assets/css/index.scss'

import social from '../assets/img/icons/social.png';

import tt from '../assets/img/icons/tt.png';
import tg from '../assets/img/icons/tg.png';
import inst from '../assets/img/icons/inst.png';
import vk from '../assets/img/icons/vk.png';

import { motion } from 'framer-motion';
import { useState } from 'react';



function Social(){


    const animation = {
        visible: (i: any) => ({
            opacity: 1,
            y: (i+1) * 60,
            transition: {
                delay: i * 0.1
            }
        }),
        hidden: { 
            y: 0,
            opacity: 0
        },
    }
    const animationRev = {
        hidden: (i: any) => ({
            opacity: 1,
            x: (i+1) * 60,
            transition: {
                delay: i * 0.1
            }
        }),
        visible: { 
            x: 0,
            opacity: 0
        },
    }

    let [test, setTest] = useState<any>(undefined);
    let [buffer, setBuffer] = useState<any>(0);

    let click = () => {
        if(buffer == 0){
            setTest(animation)
            setBuffer(1)
        }  
        if(buffer == 1) {
            setTest(animationRev)
            setBuffer(0)
        }

        console.log(test);
    }


    let list = [
        {url: tt, ref: 'https://www.instagram.com/vlasmatica/'}, 
        {url: tg, ref: 'https://www.instagram.com/vlasmatica/'}, 
        {url: inst, ref: 'https://www.instagram.com/vlasmatica/'}, 
        {url: vk, ref: 'https://www.instagram.com/vlasmatica/'}];
    return(

        <div className={style.social}>
            
            <img onClick={() => click()} src={social}/>

            {list.map( (elem: any, i: any) => {
                return(
                        <motion.a 
                        target='_blank'
                            href={elem.ref}
                            key={elem} 
                            variants={test}
                            initial='hidden'
                            animate='visible'
                            custom={i}
                        >
                                <img 
                                src={elem.url} 
                                alt=""
                                className={style.test}
                        /></motion.a>
                )
            } )}
             
        </div>

    )
}

export default Social;