import React from 'react';
import './App.css';
import {NavigationLeft} from "./components/NavigationLeft/NavigationLeft";
import {MainBlock} from "./components/MainBlock/MainBlock";
import {BrowserRouter} from "react-router-dom";
import {stateType} from "./redux/state";

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
type AppType = {
    state: stateType
}
const App:React.FC<AppType> = ({state}) => {
    return (
        <BrowserRouter>
            <div className="App">
                <NavigationLeft/>
                <MainBlock posts={state.posts} dialogs={state.dialogs}/>
            </div>
        </BrowserRouter>
    );
}

export default App;
