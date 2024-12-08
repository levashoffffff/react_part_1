import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
/* import {addPost} from './redux/state.js' */
import store from './redux/redux-store.js';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
/* import { observer } from './redux/state.js'; */


const root = ReactDOM.createRoot(document.getElementById('root'));

/* const renderEntireTree = (state) => { */
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode >
  );
/* } */

/* renderEntireTree(store.getState());

store.subscribe(() => {
  let state = store.getState();
  renderEntireTree(state);
}); */

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
