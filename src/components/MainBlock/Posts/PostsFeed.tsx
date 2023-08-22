import React from 'react';
import {Post} from "./Post/Post";
import styled from "styled-components";
import {PostsType} from "../../../redux/state";
import {DialogsActionsType} from "../../../redux/dialogs-reducer";

type PostsFeedType = {
    posts: PostsType[],
    dispatch: (action: any) => void
}
export const PostsFeed: React.FC<PostsFeedType> = ({posts,dispatch}) => {
    return (
        <StyledPostsFeed>
            <div>Top filter</div>
            <div>
                <h1>Posts</h1>
                <StyledPostsWrap>
                    {posts.map(post => <Post key={post.id}
                                             postId={post.id}
                                             dispatch={dispatch}
                                             author={post.name}
                                             likes={post.likes}
                                             likesActive={post.likesActive}
                                             date={post.date}/>)}
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