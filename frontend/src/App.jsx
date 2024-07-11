import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/header/header';
import Footer from "./components/Footer"
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';


const App = () => {
    const [movies, setMovies] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [genre, setGenre] = useState('');

    useEffect(() => {
        axios.get('/api/movies')
            .then((response) => {
                setMovies(response.data);
                setFilteredMovies(response.data);
            })
            .catch((error) => {
                console.log("Fetching error", error);
            });
    }, []);

    useEffect(() => {
        if (genre) {
            setFilteredMovies(movies.filter(movie => movie.genre === genre));
        } else {
            setFilteredMovies(movies);
        }
    }, [genre, movies]);

    const genreClick = (genre) => {
        setGenre(genre);
    };

    return (
        <div>
            <Header genreClick={genreClick} />
            <div className='container'>
                {/* Render filtered movies here */}
                <div className='grid grid-cols-2 md:grid-cols-5 gap-4 px-8 my-4 overflow-x-auto min-h-[600px]'>
                    {filteredMovies.map((movie) => (
                        <div key={movie.id} className='flex-shrink-0 movie-item'>
                            <Link to={`/moviedetail/${movie.id}`}>
                                <img className='h-[250px]' src={movie.image} alt={movie.name} />
                                <div className="mt-2">
                                    <div className="text-blue-600 text-lg">{movie.genre}</div>
                                    <div className="text-white text-lg">{movie.name}</div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            <Outlet />
            <Footer/>
        </div>
    );
};

export default App;
