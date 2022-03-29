import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Friend = ({friend}) => {
    // console.log(friend)
    const {name, username,id}=friend;
     
    const navigate = useNavigate()
     const showFriendDetail=()=>{
         let path=`/friend/${id}`;
         
         navigate(path)
     }

    return (
        <div>
            <h2>{name}</h2>
            <Link to={'/friend/'+ id} >friend detail</Link>
            <button onClick={showFriendDetail}>{username} id:{id}</button>
            
        </div>
    );
};

export default Friend;