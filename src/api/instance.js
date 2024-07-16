import axios from 'axios'
 
const instance = axios.create({
    baseURL: "https://api-store-do1w.onrender.com/shoes"
});

export default instance;
