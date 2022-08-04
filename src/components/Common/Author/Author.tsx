import React from 'react';
import style from "./Author.module.css";
type AuthorType={
    img:string,
    name:string,
    git:string
}
const Author = (props:AuthorType) => {
    return (
        <div className={style.authorInfo}>
            <img className={style.avatar} src={props.img} alt=""/>
            <div>
                <p>{props.name}</p>
                <a href={`https://github.com/${props.git}`}>GitHub: {props.git}</a>
            </div>
        </div>
    );
};

export default Author;