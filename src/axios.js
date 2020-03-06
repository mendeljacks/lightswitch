import axios from 'axios'

export const API_URL ='https://redibase-lightserver.herokuapp.com/'
// export const API_URL ='http://localhost:4411'

var apiAxios = axios.create({ baseURL: API_URL })

export default apiAxios