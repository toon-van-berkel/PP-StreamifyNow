import React from 'react';
import { useParams } from 'react-router-dom';
import MovieEmbed from './MovieEmbed';
import '../App.css';

const MovieDetail = ({ movies }) => {
    const { ttCode } = useParams();

    const movie = movies.find((movie) => movie.ttCode === ttCode);

    if (!movie) {
        return <div>Movie not found</div>;
    }

    return (
        <div className="movie-detail">
            <MovieEmbed ttCode={ttCode} />
            <div className="movie-info">
                <h2>{movie.title}</h2>
                <p>{movie.description}</p>
                <div className="rating">
                    <strong>Rating:</strong> {movie.rating || "N/A"}
                </div>
            </div>
        </div>
    );
};

export default MovieDetail;
