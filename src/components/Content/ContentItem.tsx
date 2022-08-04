import React from 'react';
import {UserType} from "../../types/types";
import style from './ContentItems.module.css'
import {Link} from "react-router-dom";
import {SetReadPageThunk} from "../../store/Reducers/ReadPageReducer";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../store/store";
import Author from "../Common/Author/Author";
type ItemType={
    title:string,
    img:string,
    id:number,
    published:string,
    user:UserType,
    des:string
}
const ContentItem = (props:ItemType) => {
    let dispatch=useDispatch<AppDispatch>();

    const openArticle=(id:number)=>{
        // @ts-ignore
        dispatch(SetReadPageThunk(id))
    }
    return (
        <Link onClick={()=>openArticle(props.id)} to={props.id+''}>
            <div className={style.cart}>
                <div className={style.coverImg}>
                    <img src={props.img} alt=""/>
                </div>
                <div className={style.info}>
                    <div>
                      <Author img={props.user.profile_image} name={props.user.name} git={props.user.github_username}/>

                    </div>
                    <div>
                        <h3>{props.title}</h3>
                        <p className={style.des}>{props.des}</p>
                        <p className={style.published}>Publishe at: {props.published}</p>
                    </div>
                </div>
            </div>
        </Link>

    );
};

export default ContentItem;