import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MovieDetail from './components/MovieDetail';
import movies from './movies.json';
import './App.css';

const App = () => {
    return (
        <Router>
            <div className="container">
                <header className="navbar">
                    <h1>
                        <Link to="/" className="logo-link">StreamifyNow</Link>
                    </h1>
                    <nav className="nav-links">
                        <Link to="/">Home</Link>
                        <Link to="/genre">Genre</Link>
                        <Link to="/country">Country</Link>
                        <Link to="/movies">Movies</Link>
                        <Link to="/tvshows">TV Shows</Link>
                    </nav>
                    <div className="login-buttons">
                        <button className="login">Login</button>
                        <button className="signup">Sign Up</button>
                    </div>
                </header>

                <Routes>
                    <Route
                        path="/"
                        element={
                            <div>
                                <div className="section">
                                    <h2>Trending</h2>
                                    <div className="movie-container">
                                        {movies.map((movie) => (
                                            <Link to={`/movie/${movie.ttCode}`} className="movie-card" key={movie.ttCode}>
                                                <img src={movie.banner} alt={`${movie.title} banner`} className="banner-image" />
                                                <h3>{movie.title}</h3>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        }
                    />
                    <Route
                        path="/movie/:ttCode"
                        element={<MovieDetail movies={movies} />}
                    />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
