import {Dialogs} from "./Dialogs";
import {sendMessageActionCreator, updateNewMessageActionCreator} from "../../redux/reducers/dialogsReducer";
import {connect} from "react-redux";
import {StoreType} from "../../redux/redux-store";
import {compose, Dispatch} from "redux";
import RedirectHOC from "../../hoc/RedirectHOC";
import {ComponentType} from "react";


const mapStateToProps = (state: StoreType) => {
    return {
        DialogData: state.dialogsReducer,
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

export const DialogsContainerComponent = compose<ComponentType>
(
    connect(mapStateToProps, mapDispatchToProps),
    RedirectHOC
)(Dialogs);
