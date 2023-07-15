import React from 'react';
import './App.css';
import {NavigationLeft} from "./components/NavigationLeft";
import {MainBlock} from "./components/MainBlock";

function App() {
    return (
        <div className="App">
            <NavigationLeft/>
            <MainBlock/>
        </div>
    );
}

export default App;
