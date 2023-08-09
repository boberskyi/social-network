import {v1} from "uuid";
import {dialogsType, postsType} from "../App";

export type stateType = {
    posts: postsType[],
    dialogs: dialogsType[]
}
export const state = {
    posts: [
        {id: v1(), name: 'Name Surname', date: '21.07.2023'},
        {id: v1(), name: 'Name2 Surname2', date: '20.07.2023'},
        {id: v1(), name: 'Name3 Surname3', date: '15.07.2023'},
    ],
    dialogs: [
        {id: v1(), name: 'Name Surname', lastLogin: '15 minutes ago'},
        {id: v1(), name: 'Name2 Surname2', lastLogin: '2 hours ago'},
        {id: v1(), name: 'Name3 Surname3', lastLogin: '1 day ago'},
        {id: v1(), name: 'Name4 Surname4', lastLogin: '2 weeks ago'},
    ]
}