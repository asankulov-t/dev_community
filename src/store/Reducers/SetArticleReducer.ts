import {ArticlesReducerTypes, initialArtType} from "../../types/types";
import {API} from "../../Api/Api";
import {AnyAction, Dispatch} from "redux";

// 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

let initialState:initialArtType={
    data:[],
    tag:'',
    items:15,
    path:''
}

const setArticlesAction=(data:Array<ArticlesReducerTypes>,path:string)=>{
    return{
        type:'SET_ARTICLES',
        data,
        path
    }as const
}
const showMoreAct=(data:Array<ArticlesReducerTypes>)=>{
    return{
        type:'SHOW_MORE',
        data
    }as const
}
export const plusItemsAct=(items:number)=>{
    return{
        type:'PLUS_ITEMS',
        items:initialState.items+=items
    }as const
}

export const SetArticleThunk=(article:string)=>{
    return (dispatch:Dispatch<AnyAction>)=>{
        API.getArticles(initialState.items,article).then((res)=>dispatch(setArticlesAction(res.data,article)))
    }
}
export const ShowMoreThunk=(countItems:number)=>{
       return (dispatch:Dispatch<AnyAction>)=>{
           dispatch(plusItemsAct(countItems))
           API.getArticles(initialState.items,initialState.tag).then((res)=>dispatch(showMoreAct(res.data)))
       }
}
//types
type PlusType=ReturnType<typeof plusItemsAct>
type ActionsType=ReturnType<typeof setArticlesAction|typeof showMoreAct>
type GlobalActionsType=ActionsType|PlusType

export const SetArticleReducer=(state=initialState,action:GlobalActionsType):initialArtType=>{
    switch (action.type) {
        case "SET_ARTICLES":
            return {data: action.data,tag:'',items:15,path:action.path}
        case "PLUS_ITEMS":
            let data=state.data
            return {data,tag:'',path:'',items:action.items}
        case "SHOW_MORE":
            return {data:action.data, tag:'',items:state.items,path:''}
        default: return state
    }
}