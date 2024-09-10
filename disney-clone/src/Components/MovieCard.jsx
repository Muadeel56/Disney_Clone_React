import React from 'react'


const ImageBaseUrl = "https://image.tmdb.org/t/p/w500"

function MovieCard({movie}) {
  return (
    <div>
        <img src={`${ImageBaseUrl}${movie.poster_path}`} alt="" />
    </div>
  )
}

export default MovieCard
