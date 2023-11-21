import axios from 'axios';

const Axios = axios.create({
    baseURL: 'https://colorful-pink-prawn.cyclic.app'
});

export default Axios;