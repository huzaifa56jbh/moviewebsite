import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faSliders } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import App from '../../App';

const Header = ({ genreClick }) => {
    const [movies, setMovies] = useState([]);
    const [toggle, setToggle] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        axios.get(`/api/movies`)
            .then((response) => {
                setMovies(response.data);
            })
            .catch((error) => {
                console.log("Fetching error", error);
            });
    }, []);

    const toggleNav = () => {
        setToggle(!toggle);
    };

    const handleGenreClick = (genre) => {
        genreClick(genre);
        setToggle(false);
    };

    return (
        <>
            <div className='flex flex-col min-h-screen'>
                <div className='min-h-[100px] min-w-[200px]'>
                    <img src='https://katmoviehd.foo/wp-content/uploads/2022/03/cropped-cropped-KatMovie-G-S1.png' alt="Logo" />
                </div>
                <div className='relative flex items-center px-8 my-4'>
                    <div className='flex gap-4 overflow-x-auto scrollbar'>
                        {movies.map((movie) => (
                            <div key={movie.id} className='flex-shrink-0 movie-item'>
                                <img className='h-[250px] movie-img' src={movie.image} alt={movie.name} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className='sm:grid grid-cols-1'>
                    <div className='min-h-[800px] w-[300px] bg-red-800 sm:hidden hidden'>
                    </div>
                </div>
                <div className='main flex flex-col w-full min-h-[50px]'>
                    <div className='flex items-center gap-4 px-4 mx-4'>
                        {/* Conditional rendering based on screen size */}
                        <ul ref={dropdownRef} className={`gap-8 px-15 my-3 md:flex cursor-pointer ${toggle ? 'flex flex-col bg-black min-w-[300px] font-mono rounded transition-ul mx-[-35px] min-h-[500px] px-5 py-4 divide-y divide-gray-900' : 'hidden'} sm:flex`}>
                            <li className='text-white font-serif font-bold text-lg hover:text-amber-900' onClick={() => handleGenreClick('Horror')}>Adult</li>
                            <li className='text-white font-serif font-bold text-lg hover:text-amber-900' onClick={() => handleGenreClick('Horror')}>K-Drama & more</li>
                            <li className='text-white font-serif font-bold text-lg hover:text-amber-900' onClick={() => handleGenreClick('Action')}>Anime</li>
                            <li className='text-white font-serif font-bold text-lg hover:text-amber-900' onClick={() => handleGenreClick('Horror')}>Hollywood</li>
                            <li className='text-white font-serif font-bold text-lg hover:text-amber-900' onClick={() => handleGenreClick('Action')}>TV shows</li>
                            <li className='text-white font-serif font-bold text-lg hover:text-amber-900' onClick={() => handleGenreClick('Action')}>Animated</li>
                            <li className='text-white font-serif font-bold text-lg hover:text-amber-900' onClick={() => handleGenreClick('Action')}>Dub movie</li>
                            <li className='text-white font-serif font-bold text-lg hover:text-amber-900' onClick={() => handleGenreClick('Action')}>Netflix</li>
                        </ul>
                        <div className='sm:hidden mx-6 my-4' onClick={toggleNav}>
                            <FontAwesomeIcon icon={faSliders} size='2x' color='grey' />
                        </div>
                        <div className='relative flex-1'>
                            <input
                                className='main min-h-[40px] w-[150px] text-white text-center rounded-lg pl-10'
                                type='search'
                                placeholder='Search'
                            />
                            <div className='absolute left-3 top-1/2 transform -translate-y-1/2'>
                                <FontAwesomeIcon icon={faSearch} size="lg" color="white" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .scrollbar::-webkit-scrollbar {
                    width: 12px;
                }

                .scrollbar::-webkit-scrollbar-track {
                    background-color: black;
                }

                .scrollbar::-webkit-scrollbar-thumb {
                    background-color: #333;
                    border-radius: 6px;
                    border: 3px solid black;
                }

                .scrollbar::-webkit-scrollbar-thumb:hover {
                    background-color: #555;
                }
            `}</style>
        </>
    );
};

export default Header;

