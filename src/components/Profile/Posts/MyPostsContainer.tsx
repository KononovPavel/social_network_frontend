import {
    addPostActionCreator,
    InitialStateType,
    updateNewPostActionCreator
} from "../../../redux/reducers/profileReducer";
import {MyPosts} from "./MyPosts";
import {useDispatch, useSelector} from "react-redux";
import {StoreType} from "../../../redux/redux-store";

const MyPostContainerComponent = () => {

    const dispatch = useDispatch()
    const postState = useSelector<StoreType, InitialStateType>(state => state.profileReducer)

    const updateNewPostTextCallback = (value: string) => {
        dispatch(updateNewPostActionCreator(value))
    }
    const addPostCallback = () => {
        dispatch(addPostActionCreator())
    }

    return <MyPosts
        posts={postState.posts}
        newPostText={postState.newPostText}
        updateNewPostTextCallback={updateNewPostTextCallback}
        addPostCallback={addPostCallback}
    />

}

export default MyPostContainerComponent;

