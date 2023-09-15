import axios from "axios";

axios.defaults.baseURL = 'https://drf-api-tutorial-8b41c2d4e8d3.herokuapp.com/'
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;