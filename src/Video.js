import React, { useRef, useState } from 'react'
import "./Video.css"
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';

function Video({ url, channel, description, song, likes, shares, messages }) {

    const videoRef = useRef(null);
    const [playing, setPlaying] = useState(false);

    const handleVideoPress = () => {
        if (playing) {
            videoRef.current.pause();
            setPlaying(false);
        } else {
            videoRef.current.play();
            setPlaying(true);
        }
        //if video playing 
        //stop it..

        //otherwise if not playng
        //play it
    }

    return (
        <div className="video">
            <video
            onClick={handleVideoPress}
             className="video_player"
             loop
             ref={videoRef}
             src={url}></video>

            {/* video Footeer */}
            <VideoFooter channel = {channel} desription = {description} song={song} />
            {/* VideoSidebar */}
            <VideoSidebar likes={likes} shares={shares} messages={messages} />
        </div>
    )
}

export default Video
