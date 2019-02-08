import axios from "axios";

const KEY = "AIzaSyD7hQZInXf3Y5U9UMI_K5bmxfNiUro1cls"



export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY


    }
})