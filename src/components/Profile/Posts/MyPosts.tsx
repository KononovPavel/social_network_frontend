import React from "react";
import {PostDataType} from "../../../redux/reducers/profileReducer";
import mPost from './MyPosts.module.css';
import {NewPosts} from "./NewPosts/NewPosts";
import {Field, InjectedFormProps, reduxForm} from "redux-form";


type MyPostsPropsType = {
    posts: Array<PostDataType>,
    addPostCallback: (newPostText:string) => void
}

type FormDataType = {
    newPostText: string
}

export function MyPosts(props: MyPostsPropsType) {
    const addPost = (value:FormDataType) => {
        props.addPostCallback(value.newPostText)
    }

    return (
        <div className={mPost.Posts}>
            <p> My posts</p>
            <div className={mPost.input}>
                <AddPostReduxForm onSubmit={addPost}/>
            </div>
            <NewPosts posts={props.posts}/>
        </div>
    )
}


const addPost: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <React.Fragment>
            <form onSubmit={props.handleSubmit}>
                <Field
                    type={'text'}
                    component={'textarea'}
                    name={'newPostText'}
                    placeholder={'Твой новый пост'}
                />
                <button
                    className={mPost.btn}>
                    Send
                </button>
            </form>
        </React.Fragment>
    )
}
const AddPostReduxForm = reduxForm<FormDataType>({form:'ADD_POST'})(addPost)
