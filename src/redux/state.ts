import {v1} from "uuid";

export type PostsType = {
    id: string,
    name: string,
    date: string
}
export type DialogsType = {
    id: string,
    name: string,
    lastLogin: string
}
export type MessagesType = {
    id: string,
    sender: string ,
    text: string
}
export type DialogsPageType = {
    dialogs: DialogsType[],
    messages: MessagesType[],
    newMessageText: string
}
export type StateType = {
    posts: PostsType[],
    dialogsPage: DialogsPageType
}
export type StoreType = {
    _state: StateType,
    getState: () => StateType,
    _callSubscriber: (state:StateType) => void,
    subscribe: (observer: () => void) => void,
    dispatch: (action:AllActionsType) => void
}
export type AllActionsType = AddMessageACType | UpdateNewMessageACType;
export type AddMessageACType = ReturnType<typeof addMessageAC>;
export type UpdateNewMessageACType = ReturnType<typeof updateNewMessageAC>;

export let store:StoreType = {
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
    _callSubscriber(state:StateType) {
        console.log('State changed');
    },
    getState() {
        return this._state
    },
    subscribe(observer:(state:StateType) => void) {
        this._callSubscriber = observer;
    },
    dispatch(action:any) {
        if(action.type === 'ADD-MESSAGE') {
            const newMsg = {id: v1(), sender: 'me', text: action.payload.message}
            this._state.dialogsPage.messages.push(newMsg);
            this._state.dialogsPage.newMessageText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-MESSAGE') {
            this._state.dialogsPage.newMessageText = action.payload.newText;
            this._callSubscriber(this._state);
        }
    }
};

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