import React from 'react';
import './App.css';
import {NavigationLeft} from "./components/NavigationLeft/NavigationLeft";
import {MainBlock} from "./components/MainBlock/MainBlock";
import {BrowserRouter} from "react-router-dom";
import {stateType} from "./redux/state";

type AppType = {
    state: stateType,
    addMessage: (newText:string) => void,
    updateNewMessage: (newMessage:string) => void
}
const App:React.FC<AppType> = ({state,addMessage,updateNewMessage}) => {
    return (
        <BrowserRouter>
            <div className="App">
                <NavigationLeft/>
                <MainBlock posts={state.posts}
                           dialogsPage={state.dialogsPage}
                           updateNewMessage={(newMessage) => updateNewMessage(newMessage)}
                           addMessage={(newText) => addMessage(newText)}/>
            </div>
        </BrowserRouter>
    );
}

export default App;
