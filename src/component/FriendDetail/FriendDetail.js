import React from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    // const params = useParams();
    const {friendId} = useParams();
    return (
        <div>
            <h1>from friend details about : {friendId}</h1>
        </div>
    );
};

export default FriendDetail;