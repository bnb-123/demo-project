import { createSlice } from "@reduxjs/toolkit";

const postsSlice = createSlice({
    name: 'posts',

    initialState: {
        posts: []
    },

    reducers:{
        set_posts:(state , action) =>{
            state.posts = action.payload;
        },


        add_post:(state , action) => {
            state.posts.push(action.payload);
        },          

        update_post: (state , action) => {
            let idx = state.posts.findIndex((post) => parseInt(post.id) === parseInt(action.payload.id));
            state.posts = state.posts.with(idx , action.payload.data)
        },

        delete_post: (state , action) => {
            state.posts = state.posts.filter((post) => parseInt(post.id) !== parseInt(action.payload));
        }
    }
});

export const { set_posts , add_post , update_post , delete_post } = postsSlice.actions;
export default postsSlice.reducer ;