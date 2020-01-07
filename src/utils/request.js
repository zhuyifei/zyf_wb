import axios from 'react-native-axios'

const service = axios.create({
  baseURL: 'https://www.fastmock.site/mock/ccc2563f2842086841b3afd9380118af/zyfwb',
  timeout: 30000,
})

service.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.code == 20000) {
      return res
    } else {

      return Promise.reject('error')
    }
  },
  error => {
    return Promise.reject(error)
  }
)

export default service
