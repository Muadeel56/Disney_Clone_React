import React from "react";
const ImageBaseUrl = "https://image.tmdb.org/t/p/w500"

function HrMovieCard({movie}) {
  return (
    <section>
      <img
        src={`${ImageBaseUrl}${movie.backdrop_path}`}
        alt=""
        className="w-[110px] md:w-[200px] rounded-lg hover:border-[3px] hover:border-gray-400
        hover:scale-110 transition-all duration-75 ease-in cursor-pointer"
      />
      <h2 className="w-[110px] md:w-[200px] text-white mt-2">{movie.title}</h2>
    </section>
  );
}

export default HrMovieCard;
