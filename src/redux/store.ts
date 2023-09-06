import {v1} from "uuid";
import {DialogsActionsType, dialogsReducer} from "./dialogs-reducer";
import {PostsActionsType, postsReducer} from "./posts-reducer";

export type PostsType = {
    id: string,
    name: string,
    date: string,
    likes: number,
    likesActive: boolean
}
// export type DialogsType = {
//     id: string,
//     name: string,
//     lastLogin: string
// }
// export type MessagesType = {
//     id: string,
//     sender: string ,
//     text: string | undefined
// }
// export type DialogsPageType = {
//     dialogs: DialogsType[],
//     messages: MessagesType[],
//     newMessageText: string
// }
// export type StateType = {
//     posts: PostsType[],
//     dialogsPage: DialogsPageType
// }
// export type StoreType = {
//     _state: StateType,
//     getState: () => StateType,
//     _callSubscriber: (state:StateType) => void,
//     subscribe: (observer: () => void) => void,
//     dispatch: (action:DialogsActionsType) => void
// }
// export let store:StoreType = {
//     _state: {
//         posts: [
//             {id: v1(), name: 'Name Surname', date: '21.07.2023', likes: 4, likesActive: true},
//             {id: v1(), name: 'Name2 Surname2', date: '20.07.2023', likes: 1, likesActive: false},
//             {id: v1(), name: 'Name3 Surname3', date: '15.07.2023', likes: 0, likesActive: false},
//         ],
//         dialogsPage: {
//             dialogs: [
//                 {id: v1(), name: 'Name Surname', lastLogin: '15 minutes ago'},
//                 {id: v1(), name: 'Name2 Surname2', lastLogin: '2 hours ago'},
//                 {id: v1(), name: 'Name3 Surname3', lastLogin: '1 day ago'},
//                 {id: v1(), name: 'Name4 Surname4', lastLogin: '2 weeks ago'},
//             ],
//             messages: [
//                 {id: v1(), sender: 'friend', text: 'Hi, how are you?'},
//                 {id: v1(), sender: 'me', text: 'I\'m fine. Sry, I\'m busy a little bit 👨🏼‍💻'},
//                 {id: v1(), sender: 'friend', text: 'Ok, i\'ll write u later, gl'},
//                 {id: v1(), sender: 'friend', text: 'Call me at 10a.m'},
//             ],
//             newMessageText: ''
//         }
//     },
//     _callSubscriber(state:StateType) {
//         console.log('State changed');
//     },
//     getState() {
//         return this._state
//     },
//     subscribe(observer:(state:StateType) => void) {
//         this._callSubscriber = observer;
//     },
//     dispatch(action:PostsActionsType | DialogsActionsType) {
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
//         this._state.posts = postsReducer(this._state.posts, action);
//         this._callSubscriber(this._state);
//     }
// }
//
// // @ts-ignore
// window.store = store;