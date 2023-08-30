import {combineReducers, legacy_createStore} from "redux";
import {dialogsReducer} from "./dialogs-reducer";
import {postsReducer} from "./posts-reducer";

let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    posts: postsReducer
})
export let store = legacy_createStore(reducers);