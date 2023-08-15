import {v1} from "uuid";

// let rerenderEntireTree = (state:stateType) => {
//     console.log('State changed');
// }

export type postsType = {
    id: string,
    name: string,
    date: string
}
export type dialogsType = {
    id: string,
    name: string,
    lastLogin: string
}
export type messagesType = {
    id: string,
    sender: string ,
    text: string
}
export type dialogsPageType = {
    dialogs: dialogsType[],
    messages: messagesType[],
    newMessageText: string
}
export type stateType = {
    posts: postsType[],
    dialogsPage: dialogsPageType
}
// export const state = {
//     posts: [
//         {id: v1(), name: 'Name Surname', date: '21.07.2023'},
//         {id: v1(), name: 'Name2 Surname2', date: '20.07.2023'},
//         {id: v1(), name: 'Name3 Surname3', date: '15.07.2023'},
//     ],
//     dialogsPage: {
//         dialogs: [
//             {id: v1(), name: 'Name Surname', lastLogin: '15 minutes ago'},
//             {id: v1(), name: 'Name2 Surname2', lastLogin: '2 hours ago'},
//             {id: v1(), name: 'Name3 Surname3', lastLogin: '1 day ago'},
//             {id: v1(), name: 'Name4 Surname4', lastLogin: '2 weeks ago'},
//         ],
//         messages: [
//             {id: v1(), sender: 'friend', text: 'Hi, how are you?'},
//             {id: v1(), sender: 'me', text: 'I\'m fine. Sry, I\'m busy a little bit 👨🏼‍💻'},
//             {id: v1(), sender: 'friend', text: 'Ok, i\'ll write u later, gl'},
//             {id: v1(), sender: 'friend', text: 'Call me at 10a.m'},
//         ],
//         newMessageText: 'test text'
//     }
// }

// export const addMessage = (newText:string) => {
//     const newMsg = {id: v1(), sender: 'me', text: newText}
//     state.dialogsPage.messages.push(newMsg);
//     state.dialogsPage.newMessageText = '';
//     rerenderEntireTree(state);
// }

// export const updateNewMessage = (newMessage:string) => {
//     state.dialogsPage.newMessageText = newMessage;
//     rerenderEntireTree(state);
// }

// export const subscribe = (observer:(state:stateType) => void) => {
//     rerenderEntireTree = observer;
// }



export let store = {
    _state: {
        posts: [
            {id: v1(), name: 'Name Surname', date: '21.07.2023'},
            {id: v1(), name: 'Name2 Surname2', date: '20.07.2023'},
            {id: v1(), name: 'Name3 Surname3', date: '15.07.2023'},
        ],
        dialogsPage: {
            dialogs: [
                {id: v1(), name: 'Name Surname', lastLogin: '15 minutes ago'},
                {id: v1(), name: 'Name2 Surname2', lastLogin: '2 hours ago'},
                {id: v1(), name: 'Name3 Surname3', lastLogin: '1 day ago'},
                {id: v1(), name: 'Name4 Surname4', lastLogin: '2 weeks ago'},
            ],
            messages: [
                {id: v1(), sender: 'friend', text: 'Hi, how are you?'},
                {id: v1(), sender: 'me', text: 'I\'m fine. Sry, I\'m busy a little bit 👨🏼‍💻'},
                {id: v1(), sender: 'friend', text: 'Ok, i\'ll write u later, gl'},
                {id: v1(), sender: 'friend', text: 'Call me at 10a.m'},
            ],
            newMessageText: 'test text'
        }
    },
    getState() {
        return this._state
    },
    _callSubscriber(state:stateType) {
        console.log('State changed');
    },
    addMessage (newText:string) {
        const newMsg = {id: v1(), sender: 'me', text: newText}
        this._state.dialogsPage.messages.push(newMsg);
        this._state.dialogsPage.newMessageText = '';
        this._callSubscriber(this._state);
    },
    updateNewMessage (newMessage:string) {
        this._state.dialogsPage.newMessageText = newMessage;
        this._callSubscriber(this._state);
    },
    subscribe(observer:(state:stateType) => void) {
        this._callSubscriber = observer;
    }
};