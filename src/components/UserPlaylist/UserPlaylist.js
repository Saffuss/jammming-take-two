import React from "react";

function UserPlaylist(props) {
    return (
        <div>
            <h3>{props.playlist.name}</h3>
            <p>{props.playlist.tracks}</p>
        </div>
    );
}

export default UserPlaylist;