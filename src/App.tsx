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
export type dialogsType = {
    id: string,
    name: string,
    lastLogin: string
}
const App = () => {
    const posts:postsType[] = [
        {id: v1(), name: 'Name Surname', date:'21.07.2023'},
        {id: v1(), name: 'Name2 Surname2', date:'20.07.2023'},
        {id: v1(), name: 'Name3 Surname3', date:'15.07.2023'},
    ];

    const dialogs:dialogsType[] = [
        {id: v1(), name: 'Name Surname', lastLogin: '15 minutes ago'},
        {id: v1(), name: 'Name2 Surname2', lastLogin: '2 hours ago'},
        {id: v1(), name: 'Name3 Surname3', lastLogin: '1 day ago'},
        {id: v1(), name: 'Name4 Surname4', lastLogin: '2 weeks ago'},
    ]
    return (
        <BrowserRouter>
            <div className="App">
                <NavigationLeft/>
                <MainBlock posts={posts} dialogs={dialogs}/>
            </div>
        </BrowserRouter>
    );
}

export default App;
