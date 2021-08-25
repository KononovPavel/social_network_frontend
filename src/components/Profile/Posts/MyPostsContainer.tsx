import {
    addPostActionCreator,
    InitialStateType,
} from "../../../redux/reducers/profileReducer";
import {MyPosts} from "./MyPosts";
import {useDispatch, useSelector} from "react-redux";
import {StoreType} from "../../../redux/redux-store";

const MyPostContainerComponent = () => {

    const dispatch = useDispatch()
    const postState = useSelector<StoreType, InitialStateType>(state => state.profileReducer)


    const addPostCallback = (newPostText:string) => {
        dispatch(addPostActionCreator(newPostText))
    }

    return <MyPosts
        posts={postState.posts}
        addPostCallback={addPostCallback}
    />

}

export default MyPostContainerComponent;

