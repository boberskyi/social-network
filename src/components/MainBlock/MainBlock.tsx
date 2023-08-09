import React from 'react';
import {Banner} from "./Banner/Banner";
import styled from "styled-components";
import {Route, Routes} from "react-router-dom";
import {Dialogs} from "./Dialogs/Dialogs";
import {PostsFeed} from "./Posts/PostsFeed";
import {ErrorPage} from "./ErrorPage/ErrorPage";
import {Messages} from "./Dialogs/Messages/Messages";
import {dialogsType, postsType} from "../../App";

type MainBlockType = {
    posts: postsType[],
    dialogs: dialogsType[]
}
export const MainBlock:React.FC<MainBlockType> = ({posts, dialogs}) => {
    return (
        <StyledMainBlock>
            <Banner/>
            <StyledMainWrapper>
                <Routes>
                    <Route path={"/"} element={<PostsFeed posts={posts}/>}/>
                    <Route path={"/dialogs"} element={<Dialogs dialogs={dialogs}/>}>
                        <Route path={":id"} element={<Messages/>}/>
                    </Route>
                    <Route path={"/posts"} element={<PostsFeed posts={posts}/>}/>
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