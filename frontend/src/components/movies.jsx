import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const moviesPerPage = 10;

    useEffect(() => {
        fetchMovies();
    }, [currentPage]);

    const fetchMovies = () => {
        axios.get(`/api/movies?page=${currentPage}&limit=${moviesPerPage}`)
            .then((response) => {
                setMovies(response.data);
                const totalMovies = parseInt(response.headers['x-total-count']);
                setTotalPages(Math.ceil(totalMovies / moviesPerPage));
            })
            .catch((error) => {
                console.log("Fetching error", error);
            });
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div>
            <div className='grid grid-cols-2 md:grid-cols-5 gap-4 px-8 my-4 overflow-x-auto min-h-[600px]'>
                {movies.map((movie) => (
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
            <div className="flex justify-center space-x-2 my-4">
                <button
                    className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${currentPage === 1 ? 'bg-blue-700' : ''}`}
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>
                <span className="text-blue-500 font-bold py-2 px-4">{currentPage}</span>
                <button
                    className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${currentPage === totalPages ? 'bg-blue-700' : ''}`}
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Movies;

