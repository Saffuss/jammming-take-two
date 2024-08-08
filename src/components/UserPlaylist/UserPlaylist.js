import React, { useEffect, useState } from "react";
import Spotify from '../Spotify';
import "./UserPlaylist.modules.css";

function UserPlaylist(props) {
    const [playlistTracks, setPlaylistTracks] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            Spotify.getTracks(props.playlist.id).then(items => {
                setPlaylistTracks(items);
            })
        }, 1000)
    }, [])

    return (
        <div className='userPlaylist'>
            <h1 className="h3">{props.playlist.name}</h1>
            {playlistTracks.map(thing => (
                <div id={thing.id}>
                    <p> - </p>
                    <p>{thing}</p>
                </div>
            ))}
        </div>
    );
}

export default UserPlaylist;