import {Dialogs} from "./Dialogs";
import {
    DialogDataType,
    sendMessageActionCreator,
    updateNewMessageActionCreator
} from "../../redux/reducers/dialogsReducer";
import {connect, useDispatch, useSelector} from "react-redux";
import {StoreType} from "../../redux/redux-store";
import {compose, Dispatch} from "redux";
import RedirectHOC from "../../hoc/RedirectHOC";
import {ComponentType} from "react";

const DialogsContainerComponent = () => {

    const dispatch = useDispatch();
    const dialogData = useSelector<StoreType, DialogDataType>(state => state.dialogsReducer)

    const addMessageCallback = () => {
        dispatch(sendMessageActionCreator())
    }

    const updateMessageCallback = (value: string) => {
        dispatch(updateNewMessageActionCreator(value))
    }

    return <Dialogs DialogData={dialogData} addMessageCallback={addMessageCallback} updateMessageCallback={updateMessageCallback}/>

}


export default compose<ComponentType>
(
    RedirectHOC
)(DialogsContainerComponent);
