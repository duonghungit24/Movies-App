import axios from 'axios';
const apiUrl = 'https://api.themoviedb.org/3';
const apiKey = 'api_key=c98914b07f15217299b6c53ecd4c2008';
//get popular movies
export const getPopularMovies = async () => {
  const response = await axios.get(`${apiUrl}/movie/popular?${apiKey}`);
  // console.log(response.data.results);
  return response.data.results;
};
// upcoming movies
export const getUpcomingMovies = async () => {
  const response = await axios.get(`${apiUrl}/movie/upcoming?${apiKey}`);
  // console.log(response.data.results);
  return response.data.results;
};
//popular Tv
export const getPopularTV = async () => {
  const response = await axios.get(`${apiUrl}/tv/popular?${apiKey}`);
  // console.log(response.data.results);
  return response.data.results;
};
