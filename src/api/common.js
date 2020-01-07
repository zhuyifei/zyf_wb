import request from '@/utils/request'
import filerequest from '@/utils/filerequest'
import Qs from 'qs'


//登录
export function sendLogin() {
  return request({
    url: '/api/login',
    method: 'post'
  })
}
