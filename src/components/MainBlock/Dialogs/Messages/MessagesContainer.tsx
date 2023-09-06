import {Messages} from "./Messages";
import {connect} from "react-redux";
import {AppStateType} from "../../../../redux/redux-store";
import {MessagesType} from "../../../../redux/dialogs-reducer";
import {Dispatch} from "redux";

// const {id} = useParams();

type MapStateToPropsType = {
    messages: MessagesType[]
}

type MapDispatchToProsType = {

}

let mapStateToProps = (state:AppStateType):MapStateToPropsType => {
    return {
        messages: state.dialogsPage.messages
    }
}
let mapDispatchToPros = (dispatch:Dispatch):MapDispatchToProsType => {
    return {

    }
}
export const MessagesContainer = connect(mapStateToProps, mapDispatchToPros)(Messages);