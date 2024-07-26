import React from "react";
import Spotify from '../Spotify';
import UserPlaylist from "../UserPlaylist/UserPlaylist";

function PlaylistList(props) {
    function handleClick() {
        Spotify.getPlaylists().then(playlists => props.setPlaylistListItems(playlists));
    }

    return (
        <div>
            <h2>Playlists</h2>
            <button type="button" onClick={handleClick}>Get Playlists</button>
                {props.playlistListItems.map(playlist => (
                    <div>
                        <UserPlaylist playlist={playlist} />
                    </div>
                ))}
        </div>
    )
}

export default PlaylistList;