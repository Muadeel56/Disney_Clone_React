import React from "react";
const ImageBaseUrl = "https://image.tmdb.org/t/p/w500"

function HrMovieCard({movie}) {
  return (
    <section className="hover:scale-100 transition-all duration-75 ease-in cursor-pointer">
      <img
        src={`${ImageBaseUrl}${movie.backdrop_path}`}
        alt=""
        className="w-[110px] md:w-[260px] rounded-lg hover:border-[3px] hover:border-gray-400
        hover:scale-110 transition-all duration-75 ease-in cursor-pointer"
      />
      <h2 className="w-[110px] md:w-[260px] text-white mt-2">{movie.title}</h2>
    </section>
  );
}

export default HrMovieCard;
