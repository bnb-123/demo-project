import axios from "axios";

const api = import.meta.env.VITE_POSTS_API;
export const postsAPI = axios.create({baseURL: api});

postsAPI.interceptors.request.use(
    async(config)=>{
        console.log(config)
        return config;
    },
    (error)=>{
        console.log(error);
        return Promise.reject(error);
    }
)

postsAPI.interceptors.response.use(
    (response)=>{
        console.log(response);
        return response;
    },
    (error)=>{
        console.log(error.status)
        return Promise.reject(error);

    }
)

