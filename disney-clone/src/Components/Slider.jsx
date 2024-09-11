import React, { useEffect, useRef, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'
import { HiChevronLeft } from "react-icons/hi2";
import { HiChevronRight } from "react-icons/hi2";


const screenWidth = window.innerWidth

const ImageBaseUrl = "https://image.tmdb.org/t/p/w500"
function Slider() {
  const [movieList, setMovieList] = useState([])
  const elementRef = useRef()
    useEffect(() => {
        getTrendingMovies()
    },[ ])

    const getTrendingMovies = () => {
        GlobalApi.getTrendingVideos.then(resp => {
            console.log(resp.data.results)
            setMovieList(resp.data.results)
        })
    }

    const sliderRight = (element) => {
      element.scrollLeft +=screenWidth-110
    }

    const sliderLeft = (element) => {
      element.scrollLeft -=screenWidth-110
    }
  return (
    <div>
      <HiChevronLeft className='hidden md:block text-white text-[30px] absolute mt-[150px] mx-8 cursor-pointer' onClick={()=> sliderLeft(elementRef.current)}/>
      <HiChevronRight className='hidden md:block text-white text-[30px] absolute right-0 mt-[150px] mx-8 cursor-pointer' onClick={()=> sliderRight(elementRef.current)}/>

    <div className='flex overflow-x-auto w-full px-16 py-4 scrollbar-none scroll-smooth' ref={elementRef}>
      {movieList.map((item,index) => (
        <img src={`${ImageBaseUrl}${item.backdrop_path}`}
         className=' md:h-[300px] object-cover object-left-top mr-10 rounded-md hover:border-4 hover:border-gray-400 transition-all duration-75 ease-in' alt=""  />
      ))}
    </div>
    </div>
  )
}

export default Slider
