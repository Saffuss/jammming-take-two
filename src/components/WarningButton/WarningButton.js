import React, { useCallback, useState } from 'react';
import Spotify from '../Spotify';

function WarningButton() {
    const [isWarning, setIsWarning] = useState(false);

    const showWarning = useCallback(() => {
        setIsWarning(true);
    }, []);

    const confirmAction = useCallback(playlistId => {
        setIsWarning(false);
        Spotify.deletePlaylist(playlistId);
    }, []);

    const cancelAction = useCallback(() => {
        setIsWarning(false);
    }, []);

    return {
        isWarning,
        showWarning,
        confirmAction,
        cancelAction
    };
}

export default WarningButton;