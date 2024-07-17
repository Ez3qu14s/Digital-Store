import axios from 'axios'
 
const instance = axios.create({
    baseURL: "https://api-store-do1w.onrender.com/"
});

export default instance;
