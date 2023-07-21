import React from 'react';
import {Banner} from "./Banner/Banner";
import styled from "styled-components";
import {MainWrapperLeft} from "./MainWrapperLeft/MainWrapperLeft";
import {MainWrapperRight} from "./MainWrapperRight/MainWrapperRight";

export const MainBlock = () => {
    return (
        <StyledMainBlock>
            <Banner/>
            <StyledMainWrapper>
                {/*Wrapper Left*/}
                <MainWrapperLeft></MainWrapperLeft>
                {/*Wrapper Left end*/}

                {/*Wrapper Right*/}
                <MainWrapperRight></MainWrapperRight>
                {/*Wrapper Right end*/}
            </StyledMainWrapper>
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
const StyledMainWrapper = styled.div`
  width: 100%;
  display: flex;
`