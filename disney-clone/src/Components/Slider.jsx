import React, { useEffect, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'
import { HiChevronLeft } from "react-icons/hi2";
import { HiChevronRight } from "react-icons/hi2";


const ImageBaseUrl = "https://image.tmdb.org/t/p/w500"
function Slider() {
  const [movieList, setMovieList] = useState([])
    useEffect(() => {
        getTrendingMovies()
    },[ ])

    const getTrendingMovies = () => {
        GlobalApi.getTrendingVideos.then(resp => {
            console.log(resp.data.results)
            setMovieList(resp.data.results)
        })
    }
  return (
    <div>
      <HiChevronLeft className='hidden md:block text-white text-[30px] absolute mt-[150px] mx-8 cursor-pointer'/>
      <HiChevronRight className='hidden md:block text-white text-[30px] absolute right-0 mt-[150px] mx-8 cursor-pointer'/>

    <div className='flex overflow-x-auto w-full px-16 py-4 scrollbar-none'>
      {movieList.map((item,index) => (
        <img src={`${ImageBaseUrl}${item.backdrop_path}`}
         className='h-[310px] min-w-full object-cover object-left-top mr-10 rounded-md' alt=""  />
      ))}
    </div>
    </div>
  )
}

export default Slider
