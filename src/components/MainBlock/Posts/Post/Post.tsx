import React from 'react';
import styled from "styled-components";

type PostPropsType = {
    author: string,
    date: string
}
export const Post:React.FC<PostPropsType> = ({author, date}) => {
    return (
        <StyledPost>
            <p>{author}</p>
            <p>{date}</p>
        </StyledPost>
    );
};

const StyledPost = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
`