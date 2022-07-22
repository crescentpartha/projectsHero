import React from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    const {friendId} = useParams();
    // const params = useParams();
    return (
        <div>
            {<h2>This is Detail of a Friend: {friendId}</h2>}
            {/* <h2>This is Detail of a Friend: {params.friendId}</h2> */}
        </div>
    );
};

export default FriendDetail;