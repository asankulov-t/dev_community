import React from 'react';
import {useSelector} from "react-redux";
import {AppRootType} from "../../store/store";
import {ReadType} from "../../types/types";
import ReadPage from "../ReadPage/ReadPage";

type ReadPageContainerType={
    url?:string
}
const ReadPageContainer = React.memo((props:ReadPageContainerType) => {
    let data = useSelector<AppRootType, Array<ReadType>>(state => state.ReadPageReducer.data)
    return (
        <div>
            {data.map((t) => <ReadPage type_of={t.type_of} id={t.id} title={t.title} description={t.description}
                                       readable_publish_date={t.readable_publish_date} slug={t.slug} path={t.path}
                                       url={t.url} comments_count={t.comments_count}
                                       public_reactions_count={t.positive_reactions_count}
                                       published_timestamp={t.published_timestamp}
                                       positive_reactions_count={t.positive_reactions_count} cover_image={t.cover_image}
                                       social_image={t.social_image} canonical_url={t.canonical_url}
                                       created_at={t.created_at} published_at={t.published_at}
                                       last_comment_at={t.last_comment_at} reading_time_minutes={t.reading_time_minutes}
                                       tag_list={t.tag_list} tags={t.tags} body_html={t.body_html}
                                       body_markdown={t.body_html} user={t.user}/>)}
        </div>
    );
})

export default ReadPageContainer;