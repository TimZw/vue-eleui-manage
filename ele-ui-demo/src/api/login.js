/**
 * 登录API
 * @author zhangwei
 * @date 2018/4/3
 */
import request from '@/utils/request'
import qs from 'qs'

// 你可以直接这样使用，之前拦截器写的东西都是生效的，
// 它自动会有一个你之前配置的baseURL,
// 但你说我这个请求baseURL和其它的不同,
// 这也是很方便的，你可以字请求内部修改，
// 它会自动覆盖你在创建实例时候写的参数，如下
// export function getInfo(token) {
//   return request({
//     baseURL: 'https:', // api2-xxxx.com
//     url: '/user/info',
//     method: 'get',
//     params: { token }
// })
// }

export function login(username, password) {
  return request({
    url: '/user/login',
    method: 'post',
    // data: {
    //   username,
    //   password
    // }
    data: qs.stringify({
      username,
      password
    })
  })
}

export function getInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout(token) {
  return request({
    url: '/user/logout',
    method: 'post',
    data: qs.stringify({ token })
  })
}
