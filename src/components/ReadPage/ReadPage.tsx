import React from 'react';
import {ReadType} from "../../types/types";
import style from './ReadPage.module.css'
import Author from "../Common/Author/Author";
import TagBtn from "../Common/TagBtn/TagBtn";
const ReadPage = (props:ReadType) => {
    return (
        <div className={style.readCard}>
            <Author img={props.user.profile_image} name={props.user.name} git={props.user.github_username}/>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <img className={style.coverImg} src={props.cover_image} alt=""/>
            <div  className={style.htmlBody} dangerouslySetInnerHTML={{__html: props.body_html}}/>
            <p>Published at: {props.published_at}</p>
            <div className={style.tags}>
                {props.tags.map((btn)=><TagBtn title={btn}/>)}
            </div>
        </div>
    );
};

export default ReadPage;