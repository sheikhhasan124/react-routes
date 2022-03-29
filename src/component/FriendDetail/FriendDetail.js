import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    // const params = useParams();
    const {friendId} = useParams();
    const [friend, setFriend]=useState({})

    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
        // console.log(url)
       fetch(url)
       .then(res=>res.json())
       .then(data=>setFriend(data))
    },[])
    return (
        <div>
            <h1>from friend details about : {friendId}</h1>
            <h2>name:{friend.name}</h2>
            <h5>email:{friend.email}</h5>
            <p>city:{friend.address?.city}</p>
        </div>
    );
};

export default FriendDetail;