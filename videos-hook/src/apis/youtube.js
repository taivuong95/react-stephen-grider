import axios from 'axios';
const KEY = 'AIzaSyCYlUy9r7xWMK3bSqcJjUDwgcjj60IFxYM';


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
    }
});