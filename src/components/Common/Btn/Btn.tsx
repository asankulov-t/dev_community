import React from 'react';
import style from './Btn.module.css'
type BtnPropsType={
    title:string,
    callBack:(str?:string)=>void
}
const Btn = (props:BtnPropsType) => {
    return <button className={style.btn} onClick={()=>props.callBack()}>{props.title}</button>
};

export default Btn;