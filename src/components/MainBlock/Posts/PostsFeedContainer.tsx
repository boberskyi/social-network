import {updateLikesAC} from "../../../redux/posts-reducer";
import {connect} from "react-redux";
import {PostsFeed} from "./PostsFeed";
import {AppStateType} from "../../../redux/redux-store";
import {PostsType} from "../../../redux/store";
import {Dispatch} from "redux";

type MapStateToProps = {
    posts: PostsType[]
}
type MapDispatchToPros = {
    onLikeClick: (postId: string) => void
}
let mapStateToProps = (state:AppStateType):MapStateToProps => {
    return {
        posts: state.posts
    }
}
let mapDispatchToPros = (dispatch:Dispatch): MapDispatchToPros => {
    return {
        onLikeClick: (postId: string) => {
            dispatch(updateLikesAC(postId));
        }
    }
}
export const PostsFeedContainer = connect(mapStateToProps, mapDispatchToPros)(PostsFeed);