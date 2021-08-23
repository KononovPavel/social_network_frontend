import {Dialogs} from "./Dialogs";
import {sendMessageActionCreator, updateNewMessageActionCreator} from "../../redux/reducers/dialogsReducer";
import {connect} from "react-redux";
import {StoreType} from "../../redux/redux-store";
import {Dispatch} from "redux";


const mapStateToProps = (state: StoreType) => {
    return {
        DialogData: state.dialogsReducer
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        addMessageCallback: () => {
            dispatch(sendMessageActionCreator())
        },
        updateMessageCallback: (value: string) => {
            dispatch(updateNewMessageActionCreator(value))
        }
    }
}
export const DialogsContainerComponent = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
