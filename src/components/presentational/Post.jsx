import React, { useCallback, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { Card } from './Card';
import { Button } from './Button';
import { delete_post } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { useMutation, useQuery } from '@tanstack/react-query';
const postAPI = import.meta.env.VITE_POSTS_API;

export const Post = () => {

    const { id } = useParams();
    const path = useNavigate();

    let getData = async () => {
        try {
            const response = await axios.get(`${postAPI}/${id}`);
            if (response.status == 200) {
                return response.data;
            }
        } catch (error) {
            if (error.status == 404) {
                console.log("data not founded")
            }
            console.log(error);
        }
    }

    let result = useQuery({
        queryKey: ["post", id],
        queryFn: getData,
        staletime: 1000 * 60 *10
    })


    let handleDeletePost = useCallback(async () => {
        let askToDelete = confirm("Are you sure you want to delete a post ?");
        if (askToDelete) {
            try {
                const response = await axios.delete(`${postAPI}/${id}`);
                if (response.status == 200) {
                    path("/")
                    alert(`This Post is deleted and post id id ${id}`)
                    return response.data;
                }
            } catch (error) {
                if (error.status == 404) {
                    console.log("data not deleted")
                }
            }
        }
    }, [id]);

    const { mutate } = useMutation({
        mutationFn: handleDeletePost
    });

    return (
        <>
            <title>{result?.data?.title}</title>
            <Card post={result?.data} page="edit" />
            <div className="button_container">
                <Link to={`/post/edit/${id}`} ><button className='edit'>Edit</button></Link>
                <Button cssClass="delete" onClickFunc={() => mutate()} />
            </div>
        </>
    )
}
