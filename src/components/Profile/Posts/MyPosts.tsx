import React, {ChangeEvent} from "react";
import { PostDataType } from "../../../redux/reducers/profileReducer";
import mPost from './MyPosts.module.css';
import {NewPosts} from "./NewPosts/NewPosts";


type MyPostsPropsType = {
    posts: Array<PostDataType>,
    newPostText: string,
    updateNewPostTextCallback: (value: string) => void
    addPostCallback: () => void
}

export function MyPosts(props: MyPostsPropsType) {
    const addPost = () => {
        props.addPostCallback()
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostTextCallback(e.currentTarget.value)
    }

    return (
        <div className={mPost.Posts}>
            <p> My posts</p>
            <div className={mPost.input}>
                <textarea placeholder={"Your new post"}
                          value={props.newPostText}
                          onChange={onPostChange}/>
            </div>
            <button
                className={mPost.btn}
                onClick={addPost}>
                Send
            </button>
            <NewPosts posts={props.posts}/>
        </div>
    )
}
