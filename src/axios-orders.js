import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-33713.firebaseio.com/'
});

export default instance;