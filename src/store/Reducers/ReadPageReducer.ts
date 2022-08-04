import {ReadPageType, ReadType} from "../../types/types";
import {AnyAction, Dispatch} from "redux";
import {API} from "../../Api/Api";

let initialState:ReadPageType={
    data:[],
    id:0
}

export const setReadPageAct=(data:ReadType,id:number)=>{
    return{
        type:"SET_READ_PAGE",
        data,
        id
    }
}

export const SetReadPageThunk=(id:number)=>{

    return (dispatch:Dispatch<AnyAction>)=>{
        API.getCurrentArticle(id).then((res)=>{
            dispatch(setReadPageAct(res.data,id))
        })
    }
}

//types

type ActionsType=ReturnType<typeof setReadPageAct>
type GlobalActType=ActionsType

export const ReadPageReducer=(state=initialState,action:GlobalActType)=>{
    switch (action.type) {
        case "SET_READ_PAGE":
            return{data: [{...action.data}],id:action.id}
        default: return state
    }
}