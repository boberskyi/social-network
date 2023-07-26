import React from 'react';
import {PostsFeed} from "./Posts/PostsFeed";
import {Dialogs} from "./Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";
import {ErrorPage} from "./ErrorPage/ErrorPage";

export const MainWrapperLeft = () => {
    return (
        <Routes>
            <Route path={"/"} element={<Dialogs/>}/>
            <Route path={"/dialogs"} element={<Dialogs/>}/>
            <Route path={"/posts"} element={<PostsFeed/>}/>
            <Route path={"/posts"} element={<PostsFeed/>}/>
            <Route path={"/*"} element={<ErrorPage/>}/>
        </Routes>
    );
};