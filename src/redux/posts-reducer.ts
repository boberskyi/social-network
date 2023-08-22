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

export const postsReducer = (state:any, action:PostsActionsType):any => {
    switch(action.type) {
        case 'UPDATE-LIKES': {
            let post = state.find((el:any) => el.id === action.payload.postId);

            if (post.likesActive) {
                post.likes--;
                post.likesActive = false;
            } else {
                post.likes++;
                post.likesActive = true;
            }
            return state;
        }
        default: return state;
    }
}