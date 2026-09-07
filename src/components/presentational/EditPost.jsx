
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
const postAPI = import.meta.env.VITE_POSTS_API;
import Input from "./Input.jsx";
import TextArea from './TextArea.jsx';
import { useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { useMutation } from '@tanstack/react-query';

export const EditPost = () => {

    const queryClient = useQueryClient();
    const { id } = useParams();
    const [post, setPost] = useState({});
    const path = useNavigate();

  
    const onePost =queryClient.getQueryData(["post" , id]);

    useEffect(() => {
        setPost({...onePost})
    }, [onePost]);

    async function EditUser(data){  
        try {
            console.log('data', data)
            let response = await axios.put(`${postAPI}/${id}`, data);
            console.log('response', response)
            if (response.status == 200) {
                alert(`This post is edited and Post id is ${post.id}`)
                path("/")
                return response.data;
            }
        } catch (error) {
            console.log(error)
        }
    }



    let { mutate } = useMutation({
        mutationFn: EditUser , 
    })

    function handleSubmit(e){
        e.preventDefault();
        mutate(post)
    }
    
    function handleInput(e) {
        setPost(value => ({ ...value, [e.target.name]: e.target.value }))
    }


    return (
        <div>
            <title>{onePost?.title}</title>
            <h2 id="create_title">Edit a Post</h2>
            <form className='form_container' id="EditForm" onSubmit={handleSubmit}>
                <Input type="text" name="title" id="title" placeholder='Add a Title' value={post?.title} onChange={(e) => handleInput(e)} required={true} />
                <TextArea type="textarea" name="body" id="body" placeholder='Add a Content' value={post?.body} onChange={(e) => handleInput(e)} required={true} />
                <Input type="text" name="tags" id="tags" placeholder='Add a tag with comma seperated' value={post?.tags} onChange={(e) => handleInput(e)} required={true} />
                <button id="create_btn">Update</button>
            </form>
        </div>
    )
}
