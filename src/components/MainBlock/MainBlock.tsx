import React from 'react';
import {Banner} from "./Banner/Banner";
import styled from "styled-components";
import {Route, Routes} from "react-router-dom";
import {ErrorPage} from "./ErrorPage/ErrorPage";
import {PostsFeedContainer} from "./Posts/PostsFeedContainer";
import {DialogsContainer} from "./Dialogs/DialogsContainer";
import {MessagesContainer} from "./Dialogs/Messages/MessagesContainer";

export const MainBlock:React.FC = () => {
    return (
        <StyledMainBlock>
            <Banner/>
            <StyledMainWrapper>
                <Routes>
                    <Route path={"/"} element={<PostsFeedContainer/>}/>
                    <Route path={"/dialogs"} element={<DialogsContainer />}>
                        <Route path={":id"} element={<MessagesContainer/>}/>
                    </Route>
                    <Route path={"/posts"} element={<PostsFeedContainer/>}/>
                    <Route path={"/*"} element={<ErrorPage/>}/>
                </Routes>
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