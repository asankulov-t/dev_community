import axios from "axios";
import {ArticlesReducerTypes, ReadType, VideosType} from "../types/types";

const instance = axios.create({
    baseURL: 'https://dev.to/api/articles',
    // headers: {
    //     'X-Custom-Header': 'foobar',
    //     'api-key':'mYM7roJxuDBmWfv56Cs9o2N8',
    // }
});
//'?tag=redux&&top=50'
export const API = {
    getArticles(per_page:number,tag:string='') {
        return instance.get<Array<ArticlesReducerTypes>>(`?per_page=${per_page}&tag=${tag}`)
    },
    resultOfSearch(per_page:number,title:string=''){
        return instance.get<Array<ArticlesReducerTypes>>('/')
    },
    getCurrentArticle(id:number){
       return instance.get<ReadType>(id+'')
    },
    getVideos(){
        return instance.get<VideosType>('/videos')
    }
}