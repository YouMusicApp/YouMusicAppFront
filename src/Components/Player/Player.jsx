import { useState } from 'react';
import { useEffect } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { useSelector } from 'react-redux';

const Player = () => {
    const [song, setSong] = useState("");
    const tracklist = useSelector(state => state.playerSlice)
    useEffect(() => {
        setSong(tracklist.track)
    }, [tracklist.track])

    return (
        <div className='fixfooter'>
            <AudioPlayer
                autoPlay
                src={song}
                onPlay={e => console.log("onPlay")}
            // another props here
            />
        </div>
    )
}

export default Player