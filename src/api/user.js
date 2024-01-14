import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/admin/users/login',
    method: 'post',
    data
  })
}

export function captcha() {
  return request({
    url: '/admin/users/code',
    method: 'get'
  })
}

export function getInfo(token) {
  return request({
    url: '/admin/users/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/admin/users/logout',
    method: 'post'
  })
}
