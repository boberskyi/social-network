import React from 'react';
import {Post} from "./Post/Post";

export const PostsFeed = () => {
    return (
        <div>
            <div>Top filter</div>
            <div>
                <h1>Posts</h1>
                <div>
                    <Post />
                    <Post />
                    <Post />
                </div>
            </div>
        </div>
    );
};