import {v1} from "uuid";
import {PostsActionsType} from "./posts-reducer";

export type DialogsActionsType = AddMessageACType | UpdateNewMessageACType;
export type AddMessageACType = ReturnType<typeof addMessageAC>;
export type UpdateNewMessageACType = ReturnType<typeof updateNewMessageAC>;
export type DialogsType = {
    id: string,
    name: string,
    lastLogin: string
}
export type MessagesType = {
    id: string,
    sender: string ,
    text: string | undefined
}
export type DialogsPageType = {
    dialogs: DialogsType[],
    messages: MessagesType[],
    newMessageText: string
}
export const addMessageAC = () => {
    return {
        type: 'ADD-MESSAGE'
    } as const
}
export const updateNewMessageAC = (newText:string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE',
        payload: {
            newText
        }
    } as const
}

const initialState:DialogsPageType =  {
    dialogs: [
        {id: v1(), name: 'Name Surname', lastLogin: '15 minutes ago'},
    ],
        messages: [
        {id: v1(), sender: 'friend', text: 'Hi, how are you?'},
    ],
        newMessageText: ''
};

export const dialogsReducer = (state = initialState, action:PostsActionsType | DialogsActionsType):DialogsPageType => {
    switch(action.type) {
        case 'ADD-MESSAGE': {
            const newMsg = {id: v1(), sender: 'me', text: state.newMessageText};
            state.newMessageText = '';
            return {...state, messages: [...state.messages, newMsg]};
        }
        case 'UPDATE-NEW-MESSAGE': {
            return {...state, newMessageText: action.payload.newText};
        }
        default: return state;
    }
}