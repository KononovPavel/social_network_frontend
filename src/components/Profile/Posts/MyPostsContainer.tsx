import {addPostActionCreator, InitialStateType,} from "../../../redux/reducers/profileReducer";
import {MyPosts} from "./MyPosts";
import {useDispatch, useSelector} from "react-redux";
import {StoreType} from "../../../redux/redux-store";
import React, {useCallback, useMemo} from 'react'

const MyPostContainerComponent = React.memo(() => {

        const dispatch = useDispatch()
        const postState = useSelector<StoreType, InitialStateType>(state => state.profileReducer)
        const posts = useMemo(() => postState, [postState])

        const addPostCallback = useCallback((newPostText: string) => {
            dispatch(addPostActionCreator(newPostText))
        }, [dispatch])

        return <MyPosts
            posts={posts.posts}
            addPostCallback={addPostCallback}
        />

    }
)

export default MyPostContainerComponent;

