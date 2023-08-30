import React from 'react';
import './App.css';
import {NavigationLeft} from "./components/NavigationLeft/NavigationLeft";
import {MainBlock} from "./components/MainBlock/MainBlock";
import {BrowserRouter} from "react-router-dom";
import {StateType} from "./redux/store";
import {DialogsActionsType} from "./redux/dialogs-reducer";

type AppType = {
    state: StateType,
    dispatch: (action:DialogsActionsType) => void
}
const App:React.FC<AppType> = ({state,dispatch}) => {
    return (
        <BrowserRouter>
            <div className="App">
                <NavigationLeft/>
                <MainBlock posts={state.posts}
                           dialogsPage={state.dialogsPage}
                           dispatch={dispatch}/>
            </div>
        </BrowserRouter>
    );
}

export default App;
