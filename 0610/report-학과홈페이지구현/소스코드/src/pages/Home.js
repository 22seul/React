import React from 'react';
import './Home.css';

const Home = () => {
    const videoId = "EK8aOY77KMQ";

    return (
        <div className="home-container">
            <div className="video-container">
                <iframe 
                    title="YouTube Video Player"
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&modestbranding=1`} 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen>
                </iframe>
                <div className="blocker"></div>
            </div>
        </div>
    );
};

export default Home;
