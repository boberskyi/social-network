import {StateType} from "../../../redux/store";
import {updateLikesAC} from "../../../redux/posts-reducer";
import {connect} from "react-redux";
import {PostsFeed} from "./PostsFeed";

let mapStateToProps = (state:StateType) => {
    return {
        posts: state.posts
    }
}
let mapDispatchToPros = (dispatch:any) => {
    return {
        onLikeClick: (postId: string) => {
            dispatch(updateLikesAC(postId));
        }
    }
}
export const PostsFeedContainer = connect(mapStateToProps, mapDispatchToPros)(PostsFeed);