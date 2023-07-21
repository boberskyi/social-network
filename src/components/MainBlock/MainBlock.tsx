import React from 'react';
import {Banner} from "./Banner/Banner";
import styled from "styled-components";

export const MainBlock = () => {
    return (
        <StyledMainBlock>
            <Banner/>
        </StyledMainBlock>
    );
};

const StyledMainBlock = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px 50px 0 138px; //right +88px as nav left
  background-color: #eff4fb;
  min-height: 100vh;
`