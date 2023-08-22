import React from 'react';
import styled from "styled-components";
import {updateLikesAC} from "../../../../redux/posts-reducer";
import {AiFillHeart, AiOutlineHeart} from "react-icons/ai";

type PostPropsType = {
    postId: string,
    author: string,
    date: string
    likes: number,
    likesActive: boolean,
    dispatch: (action: any) => void
}
export const Post:React.FC<PostPropsType> = ({dispatch, ...props}) => {
    const onLikeClick = () => {
        dispatch(updateLikesAC(props.postId));
    }
    return (
        <StyledPost>
            <p>{props.author}</p>
            <p>{props.date}</p>
            <div>
                <p>Likes: {props.likes}</p>
                <span onClick={onLikeClick}>{props.likesActive ? <AiFillHeart/> : <AiOutlineHeart/>} </span>
            </div>

        </StyledPost>
    );
};

const StyledPost = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
`