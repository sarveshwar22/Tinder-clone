import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://tinder00000.herokuapp.com'
})

export default instance;