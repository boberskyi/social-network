import React from 'react';
import {Post} from "./Post/Post";
import styled from "styled-components";

export const PostsFeed = () => {
    return (
        <StyledPostsFeed>
            <div>Top filter</div>
            <div>
                <h1>Posts</h1>
                <StyledPostsWrap>
                    <Post author="Name Surname" date="21.07.2023" />
                    <Post author="Name2 Surname2" date="20.07.2023" />
                    <Post author="Name3 Surname3" date="15.07.2023" />
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