import React from 'react';
import style from './NavBar.module.css'
import {NavLink, useLocation} from "react-router-dom";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../store/store";
import {SetArticleThunk} from "../../store/Reducers/SetArticleReducer";
import {SetReadPageThunk} from "../../store/Reducers/ReadPageReducer";

const NavBar = () => {
    let useHistory=useLocation()
    let dispatch=useDispatch<AppDispatch>();
    const getArticle=(article:string)=>{
        let art=article.replace('/','');
        // @ts-ignore
        dispatch(SetArticleThunk(art))
        // @ts-ignore
        dispatch(SetReadPageThunk(0))

    }
    return (
            <nav className={style.navBlock}>
                <ul onClick={()=>getArticle(useHistory.pathname)} >
                    <li><NavLink to="linux"><i className="bi bi-code-square"></i>Linux </NavLink></li>
                    <li><NavLink to="react"><i className="bi bi-filetype-jsx"></i>React </NavLink></li>
                    <li><NavLink to="javascript"><i className="bi bi-filetype-js"></i>JavaScript</NavLink></li>
                    <li><NavLink to="redux"><i className="bi bi-code-square"></i>Redux</NavLink></li>
                    <li><NavLink to="redux-thunk"><i className="bi bi-code-square"></i>Redux-thunk</NavLink></li>
                    <li><NavLink to="github"><i className="bi bi-github"></i>GitHub</NavLink></li>
                </ul>
            </nav>
    );
};

export default NavBar;