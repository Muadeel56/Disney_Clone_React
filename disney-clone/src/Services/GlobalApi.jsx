import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3"
const api_key = '453dec993caa0ac970f7d2f8290f0bfe'
const movieByGenreBaseUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=453dec993caa0ac970f7d2f8290f0bfe'

// https://api.themoviedb.org/3/trending/all/day?api_key=453dec993caa0ac970f7d2f8290f0bfe

const getTrendingVideos = axios.get(`${movieBaseUrl}/trending/all/day?api_key=${api_key}`);
const getMovieByGenreId=(id)=>
    axios.get(`${movieByGenreBaseUrl}&with_genres=${id}`)

export default {
    getTrendingVideos,
    getMovieByGenreId
}