import React, { useEffect, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'

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
    <div>
      <h1>MovieList</h1>
    </div>
  )
}

export default MovieList
