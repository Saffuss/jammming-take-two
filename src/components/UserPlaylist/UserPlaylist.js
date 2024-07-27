import React, { useEffect } from "react";
import "./UserPlaylist.modules.css";

function UserPlaylist(props) {
    useEffect(() => {
        
    })

    return (
        <div className='userPlaylist'>
            <h1 className="h3">{props.playlist.name}</h1>
            <p className="p">{/*props.playlist.tracks*/}</p>
        </div>
    );
}

export default UserPlaylist;