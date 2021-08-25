import React from "react";
import {PostDataType} from "../../../redux/reducers/profileReducer";
import mPost from './MyPosts.module.css';
import {NewPosts} from "./NewPosts/NewPosts";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/formValidators/Posts/validators";
import TextArea from "../../common/FormsControllers/TextAreaForm/TextArea";


type MyPostsPropsType = {
    posts: Array<PostDataType>,
    addPostCallback: (newPostText:string) => void
}

export type FormDataPostsType = {
    newPostText: string
}
let maxLength20 = maxLengthCreator(20)

export function MyPosts(props: MyPostsPropsType) {
    const addPost = (value:FormDataPostsType) => {
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


const addPost: React.FC<InjectedFormProps<FormDataPostsType>> = (props) => {
    return (
        <React.Fragment>
            <form onSubmit={props.handleSubmit}>
                <Field
                    component={TextArea}
                    name={'newPostText'}
                    placeholder={'Твой новый пост'}
                    validate={[required,maxLength20]}
                />
                <button
                    className={mPost.btn}>
                    Send
                </button>
            </form>
        </React.Fragment>
    )
}
const AddPostReduxForm = reduxForm<FormDataPostsType>({form:'ADD_POST'})(addPost)
