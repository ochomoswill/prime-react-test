import React from 'react';
import './App.css';
// import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/themes/fluent-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import {PrimeReactCard} from "./components/card";
import PrimeReactEditor from "./components/editor";


function App() {
    return (
        <React.Fragment>
            <div className={"App"}>
                <h4>Editor</h4>
                <PrimeReactEditor/>

                <h4>Card</h4>
                <PrimeReactCard/>
            </div>

        </React.Fragment>
    );
}

export default App;
