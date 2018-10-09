import axios from 'axios'

const instance = axios.create({
  baseURL: '127.0.0.1',
  withCredentials: true,
  timeout: 5000
})

instance.interceptors.request.use(response => response, error => {
  // eslint-disable-next-line no-console
  console.log(error)
  if (error.status === 401) {
    // eslint-disable-next-line no-console
    console.log('没有权限')
  } else if (error.status === 500) {
    // eslint-disable-next-line no-console
    console.log('服务器错误')
  } else if (error.status === 404) {
    // eslint-disable-next-line no-console
    console.log('找不到资源')
  }
})

export default instance
