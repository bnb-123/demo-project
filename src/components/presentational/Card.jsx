import React from 'react'

export const Card = React.memo(({post , page }) => { 
    return (
        <div className="post_container">
            <h4 className="title">{post?.title}</h4>
            {page === "home" ?  <p className="body">{post?.body?.slice(0, 100)}....</p> :  <p className="body">{post?.body}</p>}
            <div className="reaction_container">
                <p className="reaction">likes: {post?.reactions?.likes}</p>
                <p className="reaction">dislikes: {post?.reactions?.dislikes}</p>
            </div>
            <div className="tag_container"> <span> Tags </span> {post?.tags?.map((tag , i) => (<p className="tag" key={i}>{tag}</p>))}</div>
        </div>
    )
});

