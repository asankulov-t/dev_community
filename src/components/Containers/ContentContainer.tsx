import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {plusItemsAct, SetArticleThunk,} from "../../store/Reducers/SetArticleReducer";
import {AppDispatch, AppRootType} from "../../store/store";
import {ArticlesReducerTypes} from "../../types/types";
import Content from "../Content/Content";
import {Navigate, Route, Routes, useLocation, useNavigate} from "react-router-dom";
import ReadPageContainer from "./ReadPageContainer";

const ContentContainer = () => {

    let itemsCount = useSelector<AppRootType, number>((state) => state.SetArticleReducer.items);
    // let tag = useSelector<AppRootType, string | unknown>((state) => state.SetArticleReducer.tag);
    let tagPath = useLocation();
    let dispatch = useDispatch<AppDispatch>();
    let data = useSelector<AppRootType, Array<ArticlesReducerTypes>>((state) => state.SetArticleReducer.data);
    useEffect(() => {
        // @ts-ignore
        dispatch(SetArticleThunk(tagPath.pathname.replace('/', '')));
        // @ts-ignore

    }, [itemsCount, tagPath]);
    const showMoreFunc = () => {
        // @ts-ignore
        dispatch(plusItemsAct(10))
    }
    return (
        <Routes>
            <Route path={'/:cat'} element={<Content showMore={showMoreFunc} tag={tagPath.pathname} data={data}/>}>
            </Route>
            <Route path={'/:cat/:id'} element={<ReadPageContainer/>}/>
            <Route
                path="*"
                element={<Navigate to="/frontend" replace />}
            />

        </Routes>
    );
};

export default ContentContainer;