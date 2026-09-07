import { SET_POSTS , UPDATE_POST , DELETE_POST , ADD_POST } from "./actionsType";

export const set_posts = (posts) =>( { 
    type: SET_POSTS ,
    payload:{ posts }
})

export const add_post = (post) => ({
    type: ADD_POST ,
    payload:{ post }
})

export const update_post = (id , post) => ({
    type: UPDATE_POST , 
    payload: { id , post }
})

export const delete_post = (id) =>({
    type: DELETE_POST , 
    payload: { id }
})   