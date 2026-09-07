import { Link } from "react-router-dom";
import { Card } from "./Card";
const postAPI = import.meta.env.VITE_POSTS_API;
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
const oneTimeShowPosts = 12;

const Home = () => {
    const [ page , setPage ] = useState(1);
    const getData = async () => {
        try {
            const response = await axios.get(`${postAPI}?limit=${oneTimeShowPosts}&skip=${(page-1) * oneTimeShowPosts}`);
            if (response.status == 200) {
                return response.data;
            }
        } catch (error) {
            if (error.status == 404) {
                console.log(error);
            }
            console.log(error);
        }
    };

    let {data , isPlaceholderData } = useQuery({
        queryKey: ["posts" , page],
        queryFn: () => getData(),
        placeholderData: keepPreviousData,
    })

    let previousPage = () => {
      setPage((page) => Math.max(page - 1 , 1 ))
    }

    let nextPage = () => {
        if (!isPlaceholderData && Math.ceil(data?.total /oneTimeShowPosts) > page ) {
            setPage((page) => page + 1)
          }
    }
  
    return (
        <>
            <title>Posts</title>
            <Link to="/post"><button className="crt_btn">Create Post</button></Link>
            <button className="loadmore" onClick={previousPage}>Previous Posts</button>
            <button className="loadmore" onClick={nextPage}>Next Posts</button>
            <div className="posts_container">
                {
                    data?.posts?.map((post, i) =>
                    (
                        <Link className="link" to={`/post/${post.id}`} key={i}>
                            <Card post={post} page="home" />
                        </Link>
                    ))
                }
            </div>
        </>
    )
}

export default Home
