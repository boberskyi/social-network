import React from 'react';
import './App.css';
import {NavigationLeft} from "./components/NavigationLeft/NavigationLeft";
import {MainBlock} from "./components/MainBlock/MainBlock";
import {BrowserRouter} from "react-router-dom";

const App:React.FC = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <NavigationLeft/>
                <MainBlock/>
            </div>
        </BrowserRouter>
    );
}

export default App;
