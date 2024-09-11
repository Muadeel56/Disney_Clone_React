import React, { useEffect, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'
import MovieCard from './MovieCard'

function MovieList({genreId}) {

    const [movieList, setMovieList] = useState([])

    useEffect(() => {
        getMovieByGenreId()
    },[])

    const getMovieByGenreId = () => {
        GlobalApi.getMovieByGenreId(genreId).then(resp => {
            setMovieList(resp.data.results)
        })
    }

  return (
    <div className='flex'>
      {movieList.map((item, index) => (
          <MovieCard movie={item}/>
      ))}
    </div>
  )
}

export default MovieList
