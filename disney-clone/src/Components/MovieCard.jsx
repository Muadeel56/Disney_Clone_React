import React from 'react'


const ImageBaseUrl = "https://image.tmdb.org/t/p/w500"

function MovieCard({movie}) {
  return (
    <>
        <img src={`${ImageBaseUrl}${movie.poster_path}`} alt="" className='w-[110px] md:w-[200px] rounded-lg hover:border-[3px] hover:border-gray-400
        hover:scale-110 transition-all duration-75 ease-in cursor-pointer'/>
    </>
  )
}

export default MovieCard
