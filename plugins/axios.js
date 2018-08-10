import axios from 'axios'

export default axios.create({
  APIBaseUrl: process.env.APIBaseUrl
})
