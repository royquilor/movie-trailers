import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie",
});

// Request Interceptor
instance.interceptors.request.use(
  config => {
    // You can modify the request config before sending it
    return config;
  }, 
  error => {
    // Handle request errors
    console.error("Error during request:", error);
    return Promise.reject(error);
  }
);

// Response Interceptor
instance.interceptors.response.use(
  response => {
    // Any status code within the range of 2xx causes this function to trigger
    return response;
  },
  error => {
    // Any status codes outside the range of 2xx cause this function to trigger
    console.error("Error during response:", error.response);
    // You can handle the error or pass it on to be handled by the calling function
    return Promise.reject(error);
  }
);

export default instance;
