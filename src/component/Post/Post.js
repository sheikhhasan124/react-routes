import React, { useEffect, useState } from 'react';

const Post = () => {
    const [posts, setPosts]=useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(data=>setPosts(data)) 
    },[])
    return (
        <div>
            <h2>every post{posts.length}</h2>
        </div>
    );
};

export default Post;