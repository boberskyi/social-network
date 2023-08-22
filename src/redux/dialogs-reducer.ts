import {DialogsPageType} from "./state";
import {v1} from "uuid";

export type AllActionsType = AddMessageACType | UpdateNewMessageACType;
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

export const dialogsReducer = (state:DialogsPageType, action:AllActionsType):DialogsPageType => {
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