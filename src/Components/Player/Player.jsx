import { useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { useSelector } from 'react-redux';

const Player = () => {
    const playlist = useSelector(state => state.playerSlice.track)
    const [currentTrack, setTrackIndex] = useState(0)

    const handleClickNext = () => {
        setTrackIndex((currentTrack) =>
            currentTrack < playlist.length - 1 ? currentTrack + 1 : 0
        );
    };

    const handleEnd = () => {
        setTrackIndex((currentTrack) =>
            currentTrack < playlist.length - 1 ? currentTrack + 1 : 0
        );
    }


    return (
        <div className='fixfooter'>
            <AudioPlayer
                header={playlist !== '' ? `${playlist[currentTrack].name} - ${playlist[currentTrack].artist}` : ''}
                autoPlay
                layout={playlist === '' ? 'horizontal' : ''}
                src={playlist === '' ? '' : playlist[currentTrack].url}
                onPlay={e => console.log("onPlay")}
                // mirar propiedad onchange
                showSkipControls
                showJumpControls={false}
                onClickPrevious={e => console.log('previus song')}
                onClickNext={handleClickNext}
                onEnded={handleEnd}
                volume="0.5"
            // another props here
            />
        </div>
    )
}

export default Player

