import React from 'react';
import './App.css';
import {NavigationLeft} from "./components/NavigationLeft/NavigationLeft";
import {MainBlock} from "./components/MainBlock/MainBlock";
import {BrowserRouter} from "react-router-dom";
import {v1} from "uuid";

export type postsType = {
    id: string,
    name: string,
    date: string
}
const App = () => {
    const posts:postsType[] = [
        {id: v1(), name: 'Name Surname', date:'21.07.2023'},
        {id: v1(), name: 'Name2 Surname2', date:'20.07.2023'},
        {id: v1(), name: 'Name3 Surname3', date:'15.07.2023'},
    ]
    return (
        <BrowserRouter>
            <div className="App">
                <NavigationLeft/>
                <MainBlock posts={posts}/>
            </div>
        </BrowserRouter>
    );
}

export default App;
