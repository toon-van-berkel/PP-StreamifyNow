import React from 'react';
import { useParams } from 'react-router-dom';
import MovieEmbed from './MovieEmbed';

const MovieDetail = ({ movies }) => {
    const { ttCode } = useParams();
    const movie = movies.find((movie) => movie.ttCode === ttCode);

    if (!movie) {
        return <div>Movie not found</div>;
    }

    return (
        <div className="container my-4 p-4 border rounded bg-light">
            <MovieEmbed ttCode={ttCode} />
            <div className="mt-3">
                <h2>{movie.title}</h2>
                <p>{movie.description}</p>
                <div className="text-warning">
                    <strong>Rating:</strong> {movie.rating || "N/A"}
                </div>
            </div>
        </div>
    );
};

export default MovieDetail;
