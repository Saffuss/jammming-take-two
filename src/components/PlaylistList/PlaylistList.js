import React, { useEffect } from "react";
import Spotify from '../Spotify';
import UserPlaylist from "../UserPlaylist/UserPlaylist";

function PlaylistList({ playlistListItems, setPlaylistListItems, retrievePlaylists }) {
    useEffect(() => {
        retrievePlaylists();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function handleMinus(playlistToRemove) {
        Spotify.deletePlaylist(playlistToRemove.id).then(() => {
            retrievePlaylists();
        });
    }

    return (
        <div>
            <h2>Your Playlists</h2>
                {playlistListItems.map(playlist => (
                    <div key={playlist.id}>
                        <UserPlaylist playlist={playlist} onClick={() => handleMinus(playlist)} />
                    </div>
                ))}
        </div>
    )
}

export default PlaylistList;