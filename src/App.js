import React from 'react'; 
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import MovieDetail from './components/MovieDetail';
import movies from './movies.json';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <Router>
            <div className="container">
                <header>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <Link to="/" className="navbar-brand">StreamifyNow</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav me-auto">
                                <li className="nav-item">
                                    <Link to="/" className="nav-link">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/genre" className="nav-link">Genre</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/country" className="nav-link">Country</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/movies" className="nav-link">Movies</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/tvshows" className="nav-link">TV Shows</Link>
                                </li>
                            </ul>
                            <div className="d-flex">
                                <button className="btn btn-primary me-2">Login</button>
                                <button className="btn btn-success">Sign Up</button>
                            </div>
                        </div>
                    </nav>
                </header>

                <Routes>
                    <Route
                        path="/"
                        element={
                            <div>
                                <div className="p-3 rounded my-3">
                                    <h2>Trending</h2>
                                    <div className="d-flex flex-wrap gap-3 mt-2">
                                        {movies.map((movie) => (
                                            <Link to={`/movie/${movie.ttCode}`} className="text-dark text-decoration-none" key={movie.ttCode}>
                                                <div className="card" style={{ width: '10rem', Height: '300px'}}>
                                                    <img src={movie.banner} className="card-img-top" alt={`${movie.title} banner`} style={{Height: '200px'}} />
                                                    <div className="card-body text-center">
                                                        <h5 className="card-title">{movie.title}</h5>
                                                    </div>
                                                </div>
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
