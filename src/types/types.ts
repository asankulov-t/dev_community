
export type UserType={
    name: string;
    username: string;
    twitter_username: string;
    github_username: string;
    website_url: string;
    profile_image: string;
    profile_image_90: string;
}
export type ArticlesReducerTypes={
    type_of: string;
    id: number;
    title: string;
    description: string;
    readable_publish_date: string;
    slug: string;
    path: string;
    url: string;
    comments_count: number;
    public_reactions_count: number;
    collection_id?: any;
    published_timestamp: Date;
    positive_reactions_count: number;
    cover_image: string;
    social_image: string;
    canonical_url: string;
    created_at: string;
    edited_at?: any;
    crossposted_at?: any;
    published_at: string;
    last_comment_at: string;
    reading_time_minutes: number;
    tag_list: string[];
    tags: string;
    user: UserType;
}
export type initialArtType={
    data:Array<ArticlesReducerTypes>,
    tag:string,
    items:number,
    path:string|unknown
}


export type ReadPageType={
    data:Array<ReadType>,
    id:number
}
export type ReadType={
    type_of: string;
    id: number;
    title: string;
    description: string;
    readable_publish_date: string;
    slug: string;
    path: string;
    url: string;
    comments_count: number;
    public_reactions_count: number;
    collection_id?: any;
    published_timestamp: Date;
    positive_reactions_count: number;
    cover_image: string;
    social_image: string;
    canonical_url: string;
    created_at: Date;
    edited_at?: any;
    crossposted_at?: any;
    published_at: string;
    last_comment_at: Date;
    reading_time_minutes: number;
    tag_list: string;
    tags: string[];
    body_html: string;
    body_markdown: string;
    user: UserType;
}

export type User={
    name: string;
}
export type VideosObj={
    type_of: string;
    id: number;
    path: string;
    cloudinary_video_url: string;
    title: string;
    user_id: number;
    video_duration_in_minutes: string;
    video_source_url: string;
    user: User;
}

export type VideosType={
    data:Array<VideosObj>
}