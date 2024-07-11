import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';

const Moviedetail = () => {
  const [moviedetail, setmoviedetail] = useState({});
  const { userid } = useParams();

  useEffect(() => {
    axios.get(`/api/movies/${userid}`).then((response) => {
      console.log(response.data); // Check the API response
      setmoviedetail(response.data);
    });
  }, [userid]);

  return (
    <>
      {moviedetail.id ? (
        <div className='grid grid-cols-1 mx-4 px-4'>
          <div className='min-h-[200px]'>
            <h1 className='text-white text-xl md:text-4xl font-serif'>
              {moviedetail.title}
            </h1>
          </div>
          <h1 className='mx-4 px-4 text-center text-white text-base md:text-xl font-serif'>
            {moviedetail.short}
          </h1>
          <div className='flex justify-center min-h-[150px] rounded px-4 mx-4 my-4'>
            <img className='object-cover h-auto w-full max-w-xs md:max-w-sm lg:max-w-md' src={moviedetail.image} alt={moviedetail.title} />
          </div>
          <div className='flex flex-col justify-center px-4 mx-4 text-center'>
            <h3 className='text-blue-800 md:text-xl text-base '>[How to Download] </h3>
            <h2 className='text-white md:text-xl text-base font-serif my-5 '>{moviedetail.title} (Full Movie)</h2>
            <h2 className='text-blue-600 md:text-xl text-base font-serif my-2'>IMDb Rating: {moviedetail.rating} </h2>
            <h2 className='text-white md:text-xl text-base font-serif my-2'>Genres: {moviedetail.genre}</h2>
            <h1 className='text-white md:text-2xl text-base font-serif my-5'> Storyline</h1>
            <h2 className='text-white md:text-xl text-base font-serif my-5'>{moviedetail.desc}</h2>
            <h1 className='text-orange-500 md:text-2xl text-base font-serif my-5'>: SCREENSHOTS :</h1>
            <div className='min-h-[500px] w-full md:w-[800px] flex'>
              <img className='m-auto max-w-full h-auto md:relative md:left-[170px]' src={moviedetail.bgimg} alt='Screenshot' />
            </div>
            <h2 className='text-gray-400 md:text-2xl text-base font-serif my-7'>{moviedetail.name}</h2>
            <h2 className='text-blue-400 md:text-2xl text-base font-serif my-7'>: DOWNLOAD LINKS : </h2>
            <hr className='border-t border-blue-400 my-4' />
            <h2 className='text-blue-400 md:text-2xl text-base font-serif my-7'>480p Pack [990MB]</h2>
            <hr className='border-t border-blue-400 my-4' />
            <h2 className='text-blue-400 md:text-2xl text-base font-serif my-7'>720p Pack [2.3GB]</h2>
            <hr className='border-t border-blue-400 my-4' />
            <h2 className='text-blue-400 md:text-2xl text-base font-serif my-7'>1080p 10bit Pack [4.2GB]</h2>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}

export default Moviedetail;

