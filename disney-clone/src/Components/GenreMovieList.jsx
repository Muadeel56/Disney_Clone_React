import React from 'react'
import GenresList from '../Constant/GenresList'

function GenreMovieList() {
  return (
    <div>
      {GenresList.genere.map((item, index) => index<4 &&(
          <div className='p-8 px-8 md:p-16'>
             <h2 className='text-white text-[20px] font-bold'>{item.name}</h2>
          </div>
      ))}
    </div>
  )
}

export default GenreMovieList
