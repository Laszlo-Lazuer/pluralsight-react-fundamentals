import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Hello from './Components/HelloTime';
import registerServiceWorker from './registerServiceWorker';

let model = { clicks: 0 };

function render() {
    ReactDOM.render(
        <div>
        <h2>Div Click count</h2>            
        <App
            clicks={model.clicks}
            onClick={() => { model.clicks +=1; render();}}
        />
        <h2>Hello Component w/ Time</h2>
        <Hello now={new Date().toISOString()} />
        </div>,
        document.getElementById('root'));
}

render();

registerServiceWorker();
