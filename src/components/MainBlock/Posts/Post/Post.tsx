import React from 'react';
import styled from "styled-components";
import {AiFillHeart, AiOutlineHeart} from "react-icons/ai";

type PostPropsType = {
    onLikeClick: (postId:string) => void,
    post: {
        id:string,
        name: string,
        date: string
        likes: number,
        likesActive: boolean
    }
}
export const Post:React.FC<PostPropsType> = ({...props}) => {
    const onLikeClick = () => props.onLikeClick(props.post.id);

    return (
        <StyledPost>
            <p>{props.post.name}</p>
            <p>{props.post.date}</p>
            <div>
                <p>Likes: {props.post.likes}</p>
                <span onClick={onLikeClick}>{props.post.likesActive ? <AiFillHeart/> : <AiOutlineHeart/>} </span>
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