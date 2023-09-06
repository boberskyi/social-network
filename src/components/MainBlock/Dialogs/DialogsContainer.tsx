import {Dialogs} from "./Dialogs";
import {addMessageAC, DialogsType, updateNewMessageAC} from "../../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";

type MapStateToPropsType = {
    dialogs: DialogsType[],
    newMessage: string
}
type MapDispatchToPros = {
    onBtnSendClick: () => void,
    onTextareaChange: (newText:string) => void
}
let mapStateToProps = (state:AppStateType): MapStateToPropsType => {
    return {
        dialogs: state.dialogsPage.dialogs,
        newMessage: state.dialogsPage.newMessageText,
    }
}
let mapDispatchToPros = (dispatch:Dispatch): MapDispatchToPros => {
    return {
        onBtnSendClick: () => dispatch(addMessageAC()),
        onTextareaChange: (newText:string) => dispatch(updateNewMessageAC(newText))
    }
}
export const DialogsContainer = connect(mapStateToProps, mapDispatchToPros)(Dialogs);