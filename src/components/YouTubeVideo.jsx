import React from 'react'
import YouTube from 'react-youtube';

const YouTubeVideo = ({ videoUrl }) => {

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 0,
        },
    };


    return (
        <YouTube videoId={getYouTubeVideoId(videoUrl)} opts={opts} />
    )
}


// Helper function to extract video ID from the URL
const getYouTubeVideoId = (url) => {
    const match = url.match(/(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/);
    return match && match[1];
};

export default YouTubeVideo