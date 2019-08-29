import axios from 'axios';

// Youtube API Key is restricted to local development
const KEY = "AIzaSyA3fgLX1_at2V1hzFR0ROUZgeOirDTwt4k";

export default axios.create({
    baseURL: 'https://googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults: 5,
        key: KEY
    }
});
