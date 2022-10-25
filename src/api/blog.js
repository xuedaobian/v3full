import Http from './http.js'

export function loginAndRegister() {
  return Http.request({ methods: 'post', url: '/login', data: { username: 'admin', password: '123456' } });
}