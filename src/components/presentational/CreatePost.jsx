import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from './Input';
import TextArea from './TextArea.jsx';
import axios from "axios";
import { useMutation } from '@tanstack/react-query';
const postAPI = import.meta.env.VITE_POSTS_API;


export const CreatePost = () => {
    const path = useNavigate();
    const [createPost, setCreatePost] = useState({ title: "", body: "", tags: [] })

    function handleInput(e) {
        setCreatePost(value => ({ ...value, [e.target.name]: e.target.value }))
    }

    async function handleForm(e) {
        e.preventDefault();
        let obj = {
            "title": createPost.title,
            "body": createPost.body,
            "tags": createPost.tags.split(","),
            "reactions": {
                "likes": 0,
                "dislikes": 0
            },
            "views": 0,
            "userId": Math.floor(Math.random() * 100) + 1
        }
        mutate(obj)
    }

    async function createUser(obj){
        try {
            const response = await axios.post(`${postAPI}/add`, obj);
            if (response.status == 201) {
                setCreatePost(({ title: "", body: "", tags: [] }));
                alert(`post is created with Id is ${response.data.id}`);
                path("/");
                return response.data;
            }
        } catch (error) {
            if(error.status == 404){
                console.log("data not created")
            }
            console.log(error);
        }
    }

    let { mutate } = useMutation({
        mutationFn:createUser
    })


    return (
        <div>
            <h2 id="create_title">Create a Post</h2>
            <form className='form_container' onSubmit={handleForm}>
                <Input type="text" name="title" id="title" placeholder='Add a Title' value={createPost.title} onChange={(e) => handleInput(e)} required={true} />
                <TextArea type="textarea" name="body" id="body" placeholder='Add a Content' value={createPost.body} onChange={(e) => handleInput(e)} required={true} />
                <Input type="text" name="tags" id="tags" placeholder='Add a tag with comma seperated' value={createPost.tags} onChange={(e) => handleInput(e)} required={true} />
                <button id="create_btn">Create</button>
            </form>
        </div>
    )
}
