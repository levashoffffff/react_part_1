import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
/* import {addPost} from './redux/state.js' */
import store from './redux/state.js';
import reportWebVitals from './reportWebVitals';
/* import { observer } from './redux/state.js'; */



const renderEntireTree = (state) => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
  <React.StrictMode>
    <App state={state} dispatch={store.dispatch.bind(store)}/>
  </React.StrictMode>
);
}

renderEntireTree(store.get_state());

store.observer(renderEntireTree);

/* const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App state={state} addPost={addPost}/>
  </React.StrictMode>
); */

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
