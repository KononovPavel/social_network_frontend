import {Dialogs} from "./Dialogs";
import {
    DialogDataType,
    sendMessageActionCreator,
} from "../../redux/reducers/dialogsReducer";
import { useDispatch, useSelector} from "react-redux";
import {StoreType} from "../../redux/redux-store";
import {compose} from "redux";
import RedirectHOC from "../../hoc/RedirectHOC";
import {ComponentType} from "react";

const DialogsContainerComponent = () => {

    const dispatch = useDispatch();
    const dialogData = useSelector<StoreType, DialogDataType>(state => state.dialogsReducer)

    const addMessageCallback = (newMessage:string) => {
        dispatch(sendMessageActionCreator(newMessage))
    }

    return <Dialogs
        DialogData={dialogData}
        addMessageCallback={addMessageCallback}
    />

}


export default compose<ComponentType>
(
    RedirectHOC
)(DialogsContainerComponent);
