import axios from 'axios'

const API_URL ='http://localhost:4411'

var apiAxios = axios.create({ baseURL: API_URL })

export default apiAxios