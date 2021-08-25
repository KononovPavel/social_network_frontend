import React from "react";
import nPost from './NewPosts.module.css'
import {PostDataType} from "../../../../redux/reducers/profileReducer";


type NewPostsPropsType = {
    posts: Array<PostDataType>
}

export const NewPosts = (props: NewPostsPropsType) => {

    return (<div>
        {
            props.posts.map(p => {
                    return (
                        <div key={p.id} className={nPost.post}>
                            <div className={nPost.avatar}><img
                                src={p.avaLink}
                                alt=""/></div>
                            <div className={nPost.fam}> {p.name} {p.fam}</div>
                            <div className={nPost.message}>{p.message}</div>
                            <div className={nPost.likesCount}>Likes:{p.likesCount}</div>
                            <button className={nPost.delete} onClick={() => alert(p.message)}>X</button>
                        </div>
                    )
                }
            )
        }
    </div>)
}










