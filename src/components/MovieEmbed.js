// MovieEmbed.js
import React from 'react';

const MovieEmbed = ({ ttCode }) => {
    const baseUrl = "https://www.2embed.cc/embed/";
    const embedUrl = `${baseUrl}${ttCode}`;

    return (
        <div className="video-container">
            <iframe
                src={embedUrl}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="Movie Embed"
                style={{ width: '100%', height: '100%' }}
            />
        </div>
    );
};

export default MovieEmbed;
