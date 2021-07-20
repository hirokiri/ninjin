import { Tooltip, Toast, Popover } from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {SubComponent} from './sub-component';

const App = () => {
    return (
        <div>
            <h1>Hello React!</h1>
            <img src={"logo.svg"}/>
            <SubComponent name="My unko Counter for TypeScript"/>
        </div>
    );
}

ReactDOM.render(<App/>, document.querySelector('#app'));

