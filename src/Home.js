import React from 'react'
import ReactTwitchEmbedVideo  from 'react-twitch-embed-video';
import {Container} from 'react-bootstrap';

export const Home = () => {
    return (
        <div>
            <p>Home</p>
                <ReactTwitchEmbedVideo
                    autoplay
                    channel="cynaschism"
                    height="480p"
                    muted={false}
                    targetId="twitch-embed"
                    width="100%"
                />
            
        </div>
    )
}
