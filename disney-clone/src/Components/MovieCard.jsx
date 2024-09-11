import React from 'react'


const ImageBaseUrl = "https://image.tmdb.org/t/p/w500"

function MovieCard({movie}) {
  return (
    <>
        <img src={`${ImageBaseUrl}${movie.poster_path}`} alt="" className='w-[110px] md:w-[200px]'/>
    </>
  )
}

export default MovieCard
