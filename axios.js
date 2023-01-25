import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie",
});

export default instance;
