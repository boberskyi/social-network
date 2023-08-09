import {v1} from "uuid";
import {StyledMessageWrpType} from "../components/MainBlock/Dialogs/Messages/Messages";

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
    messages: messagesType[]
}
export type stateType = {
    posts: postsType[],
    dialogsPage: dialogsPageType
}
export const state = {
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
        ]
    }
}