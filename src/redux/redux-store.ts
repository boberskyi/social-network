import {combineReducers, legacy_createStore} from "redux";
import {dialogsReducer} from "./dialogs-reducer";
import {postsReducer} from "./posts-reducer";

export type AppStateType = ReturnType<typeof rootReducer>;

export const rootReducer = combineReducers({
    dialogsPage: dialogsReducer,
    posts: postsReducer
})
export const store = legacy_createStore(rootReducer);