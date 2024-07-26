import React from "react";
import "./UserPlaylist.modules.css";

function UserPlaylist(props) {
    return (
        <div className='userPlaylist'>
            <h3 className="h3">{props.playlist.name}</h3>
            <p className="p">{/*props.playlist.tracks*/}</p>
        </div>
    );
}

export default UserPlaylist;