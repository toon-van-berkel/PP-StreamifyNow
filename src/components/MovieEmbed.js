import React from 'react';

const MovieEmbed = ({ ttCode }) => {
    const baseUrl = "https://www.2embed.cc/embed/";
    const embedUrl = `${baseUrl}${ttCode}`;

    return (
        <div className="ratio ratio-16x9">
            <iframe
                src={embedUrl}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="Movie Embed"
            />
        </div>
    );
};

export default MovieEmbed;
