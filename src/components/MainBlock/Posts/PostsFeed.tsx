import React from 'react';
import {Post} from "./Post/Post";
import styled from "styled-components";
import {PostsType} from "../../../redux/state";

type PostsFeedType = {
    posts: PostsType[]
}
export const PostsFeed:React.FC<PostsFeedType> = ({posts}) => {
    return (
        <StyledPostsFeed>
            <div>Top filter</div>
            <div>
                <h1>Posts</h1>
                <StyledPostsWrap>
                    {posts.map(post => <Post key={post.id} author={post.name} date={post.date} />)}
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