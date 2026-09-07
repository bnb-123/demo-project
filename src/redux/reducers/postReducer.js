import { SET_POSTS, UPDATE_POST, DELETE_POST, ADD_POST } from "../actionsType"

const intialState = { posts: [] }

export default function (state = intialState, action) {
    switch (action.type) {
        case SET_POSTS: {
            const { posts } = action.payload;
            return {
                ...state,
                posts: [ ...posts]
            }
        }

        case ADD_POST: {
            const { post } = action.payload;
            return {
                ...state,
                posts: [...state.posts, post]
            }
        }

        case UPDATE_POST: {
            const { id, post } = action.payload;
            let idx = state.posts.findIndex((post) => parseInt(post.id) === parseInt(id));
            return {
              ...state ,
              posts : state.posts.with(idx , post)
            }
  
        }     

        case DELETE_POST: {
             const { id } = action.payload;
             return {...state , posts: state.posts.filter((post) => parseInt(post.id) !== parseInt(id))};
        }

        default:
            return state;

    }
}