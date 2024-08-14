import React, { useEffect } from "react";
import Spotify from '../Spotify';
import UserPlaylist from "../UserPlaylist/UserPlaylist";

function PlaylistList(props) {
    function handleClick() {
        Spotify.getPlaylists().then(playlists => props.setPlaylistListItems(playlists));
    }

    useEffect(() => {
        setTimeout(props.retrievePlaylists, 500)
    }, []);

    function handleMinus(playlistToRemove) {
        Spotify.deletePlaylist(playlistToRemove.id);
        const filterPlaylists = props.playlistListItems.filter((playlist) => playlist !== playlistToRemove);
        props.setPlaylistListItems(filterPlaylists);
    }

    return (
        <div>
            <h2>Your Playlists</h2>
                {props.playlistListItems.map(playlist => (
                    <div key={playlist.id}>
                        <UserPlaylist playlist={playlist} onClick={() => handleMinus(playlist)} />
                    </div>
                ))}
        </div>
    )
}

export default PlaylistList;