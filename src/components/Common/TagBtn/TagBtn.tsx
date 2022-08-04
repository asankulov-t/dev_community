import React from 'react';
import  style from './TagBtn.module.css'
type TagBtnType={
    title:string,
    callback?:()=>void
}
const TagBtn = (props:TagBtnType) => {
    return <button className={style.btn}>#{props.title}</button>
};

export default TagBtn;