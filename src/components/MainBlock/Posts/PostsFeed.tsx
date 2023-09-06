import React from 'react';
import {Post} from "./Post/Post";
import styled from "styled-components";
import {PostsType} from "../../../redux/store";

type PostsFeedType = {
    onLikeClick: (postId:string) => void,
    posts: PostsType[]
}
export const PostsFeed:React.FC<PostsFeedType> = ({...props}) => {
    return (
        <StyledPostsFeed>
            <div>Top filter</div>
            <div>
                <h1>Posts</h1>
                <StyledPostsWrap>
                    {props.posts.map(post => <Post key={post.id} post={post} onLikeClick={props.onLikeClick}/>)}
                </StyledPostsWrap>
            </div>
        </StyledPostsFeed>
    );
};

const StyledPostsFeed = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`
const StyledPostsWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
`