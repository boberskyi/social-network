import {Dialogs} from "./Dialogs";
import {addMessageAC, updateNewMessageAC} from "../../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {StateType} from "../../../redux/store";

let mapStateToProps = (state:StateType) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        newMessage: state.dialogsPage.newMessageText
    }
}
let mapDispatchToPros = (dispatch:any) => {
    return {
        onBtnSendClick: () => {
            dispatch(addMessageAC());
        },
        onTextareaChange: (newText:string) => {
            dispatch(updateNewMessageAC(newText));
        }
    }
}
export const DialogsContainer = connect(mapStateToProps, mapDispatchToPros)(Dialogs);