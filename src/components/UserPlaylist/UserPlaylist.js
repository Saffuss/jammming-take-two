import React from "react";
import "./UserPlaylist.modules.css";

function UserPlaylist(props) {
    return (
        <div className='userPlaylist' onClick={props.onClick}>
            <h1 className="h3">{props.playlist.name}</h1>
            {props.playlist.tracks.map(thing => (
                <div id={thing.id}>
                    <p> - </p>
                    <p>{thing}</p>
                </div>
            ))}
        </div>
    );
}

export default UserPlaylist;