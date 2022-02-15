import axios from 'axios';

const url = 'http://localhost:5000/posts';
export const fetchAllPosts = () => {
    return axios.get(url);
}

export const createNewPost = (reqBody) => {
    return axios.post(url, reqBody);
}