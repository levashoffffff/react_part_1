import {combineReducers, legacy_createStore as createStore}  from "redux";
import columnsPageReducer from "./columns-page-reducer";
import verticalPageReducer from "./vertical-page-reducer";

let state = combineReducers({
    columnsPage: columnsPageReducer,
    verticalPage: verticalPageReducer
});

let store = createStore(state);

export default store;