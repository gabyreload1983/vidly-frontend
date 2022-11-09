import http from "./httpService";
import config from "../config.json";

const moviesUrl = `${config.apiUrl}/movies`;

export function getMovies() {
  return http.get(moviesUrl);
}

export function deleteMovie(movieId) {
  return http.delete(`${moviesUrl}/${movieId}`);
}

export function getMovie(id) {
  return http.get(`${moviesUrl}/${id}`);
}

export function saveMovie(movie) {
  if (movie._id) {
    const body = { ...movie };
    delete body._id;
    return http.put(`${moviesUrl}/${movie._id}`, body);
  }

  return http.post(`${moviesUrl}`, movie);
}
