import React from 'react';
import './App.css';
import {NavigationLeft} from "./components/NavigationLeft/NavigationLeft";
import {MainBlock} from "./components/MainBlock/MainBlock";

function App() {
    return (
        <div className="App">
            <NavigationLeft/>
            <MainBlock/>
        </div>
    );
}

export default App;
