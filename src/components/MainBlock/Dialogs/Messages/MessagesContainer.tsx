import {Messages} from "./Messages";
import {StateType} from "../../../../redux/store";
import {connect} from "react-redux";

// const {id} = useParams();
let mapStateToProps = (state:StateType) => {
    return {
        messages: state.dialogsPage.messages
    }
}
let mapDispatchToPros = (dispatch:any) => {
    return {

    }
}
export const MessagesContainer = connect(mapStateToProps, mapDispatchToPros)(Messages);