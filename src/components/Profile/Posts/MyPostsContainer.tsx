import  {Dispatch} from "redux";
import {addPostActionCreator, updateNewPostActionCreator} from "../../../redux/reducers/profileReducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {StoreType} from "../../../redux/redux-store";



const mapStateToProps = (state:StoreType)=>{
    return{
        posts:state.profileReducer.posts,
        newPostText: state.profileReducer.newPostText
    }
}
const mapDispatchToProps = (dispatch:Dispatch)=>{
    return{
        updateNewPostTextCallback:(value:string)=>{
            dispatch(updateNewPostActionCreator(value))
        },
        addPostCallback:()=>{
            dispatch(addPostActionCreator())
        }
    }
}

export const MyPostContainerComponent = connect(mapStateToProps,mapDispatchToProps)(MyPosts)

