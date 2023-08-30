import {PostsType} from "./store";
import {v1} from "uuid";
import {DialogsActionsType} from "./dialogs-reducer";

export type PostsActionsType = UpdateLikesACType;
export type UpdateLikesACType = ReturnType<typeof updateLikesAC>;
export const updateLikesAC = (postId:string) => {
    return {
        type: 'UPDATE-LIKES',
        payload: {
            postId
        }
    } as const
}

let initialState:PostsType[] = [
        {id: v1(), name: 'Name Surname', date: '21.07.2023', likes: 4, likesActive: true},
    ];

export const postsReducer = (state = initialState, action:PostsActionsType | DialogsActionsType):PostsType[] => {
    switch(action.type) {
        case 'UPDATE-LIKES': {
            let post:PostsType | undefined = state.find((el:any) => el.id === action.payload.postId);

            if (post) {
                post.likes += post.likesActive ? -1 : 1;
                post.likesActive = !post.likesActive;
            }

            return state;
        }
        default: return state;
    }
}