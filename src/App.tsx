import React from 'react';
import './App.css';
import {NavigationLeft} from "./components/NavigationLeft/NavigationLeft";
import {MainBlock} from "./components/MainBlock/MainBlock";
import {BrowserRouter} from "react-router-dom";
import {stateType} from "./redux/state";
import {addMessage} from "./redux/state";

type AppType = {
    state: stateType
}
const App:React.FC<AppType> = ({state}) => {
    return (
        <BrowserRouter>
            <div className="App">
                <NavigationLeft/>
                <MainBlock posts={state.posts} dialogsPage={state.dialogsPage} addMessage={(newText) => addMessage(newText)}/>
            </div>
        </BrowserRouter>
    );
}

export default App;
