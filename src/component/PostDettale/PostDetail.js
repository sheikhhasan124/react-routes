import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostDetail = () => {
    const {postId}= useParams()
    const [post,setPost]=useState({})
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(res=>res.json())
        .then(data=>setPost(data))
    },[postId])
    return (
        <div>
            <h2>post detaile{postId}</h2>
            <h3>title:{post.title}</h3>
        </div>
    );
};

export default PostDetail;