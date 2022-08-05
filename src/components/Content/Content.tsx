import React from 'react';
import {ArticlesReducerTypes} from "../../types/types";
import ContentItem from "./ContentItem";
import Btn from "../Common/Btn/Btn";

type ContentTypes = {
    data: Array<ArticlesReducerTypes>,
    showMore:()=>void,
    tag:string|unknown
}
const Content = React.memo((props: ContentTypes) => {
    return <div>
        <div>
            {props.data.map((item) => {
                return <div>
                    <ContentItem title={item.title}
                                 img={item.cover_image}
                                 id={item.id}
                                 published={item.published_at}
                                 user={item.user}
                                 des={item.description}/>
                </div>
            })
            }
            <Btn callBack={props.showMore} title={'Show More'}/>
        </div>
    </div>

})

export default Content;