"use client"
import style from './button.module.css';

/*export default function Button({onclick}){
    return(
        <button className={style.button} onClick={onclick}>Boton</button>
    )
}
*/
import clsx from 'clsx'
export default function Button({onClick, text, variante}){
    return(
        <button className={style.button} onClick={onClick}>Boton</button>,
        <button className={
            clsx({
                [style.button]: true,
                [style.variante_primaria]: variante == "primaria",
                [style.variante_secundaria]: variante == "secundaria"
                
            })
        }
        onClick={onClick}>{text}</button>
    )
}