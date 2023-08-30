import {DialogsPageType} from "./store";
import {v1} from "uuid";
import {PostsActionsType} from "./posts-reducer";

export type DialogsActionsType = AddMessageACType | UpdateNewMessageACType;
export type AddMessageACType = ReturnType<typeof addMessageAC>;
export type UpdateNewMessageACType = ReturnType<typeof updateNewMessageAC>;
export const addMessageAC = (message:string | undefined) => {
    return {
        type: 'ADD-MESSAGE',
        payload: {
            message
        }
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
            const newMsg = {id: v1(), sender: 'me', text: action.payload.message};
            state.messages.push(newMsg);
            state.newMessageText = '';
            return state;
        }
        case 'UPDATE-NEW-MESSAGE': {
            state.newMessageText = action.payload.newText;
            return state;
        }
        default: return state;
    }
}