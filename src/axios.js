import axios from 'axios'

export const API_URL ='https://redibase-lightserver.herokuapp.com/'

var apiAxios = axios.create({ baseURL: API_URL })

export default apiAxios