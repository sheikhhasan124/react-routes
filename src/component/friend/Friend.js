import React from 'react';
import { useNavigate } from 'react-router-dom';

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
            <button onClick={showFriendDetail}>{username} id:{id}</button>
            
        </div>
    );
};

export default Friend;