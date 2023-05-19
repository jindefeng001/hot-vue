import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import config from '@/config/request.config'
import getConstants from '@/config/constant.config'
const globals = config()
const constants = getConstants()
const service = axios.create({
    baseURL: "http://localhost:8023/", // url = base url + request url
    // withCredentials: true, // send cookies when cross-domain requests
    timeout: 30000 // request timeout
})

// request interceptor
// service.interceptors.request.use(
//     config => {
//         // do something before request is sent
//         /* if(!config.headers['Content-Type'] && ){
//           config.data = qs.stringify(config.data)
//           config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
//         } */
//         if (store.getters.token) {
//             // let each request carry token
//             // ['X-Token'] is a custom headers key
//             // please modify it according to the actual situation
//             const token = getToken()
//             config.headers['JwtToken'] = getToken()
//         }
//         return config
//     },
//     error => {
//         // do something with request error
//         console.log(error) // for debug
//         return Promise.reject(error)
//     }
// )
//
// // response interceptor
// service.interceptors.response.use(
//     /**
//      * If you want to get http information such as headers or status
//      * Please return  response => response
//      */
//
//     /**
//      * Determine the request status by custom code
//      * Here is just an example
//      * You can also judge the status by HTTP Status Code
//      */
//     response => {
//         const newJwtToken = response.headers.jwttoken
//         if (newJwtToken && newJwtToken != null && newJwtToken != '' && newJwtToken != 'undefined') {
//             store.dispatch('user/login', { 'token': newJwtToken })
//             Cookies.set('vue_admin_template_token', newJwtToken)
//         }
//         const res = response.data
//         // if the custom code is not 20000, it is judged as an error.
//         if (response.status !== 200) {
//             Message({
//                 message: res.message || 'Error',
//                 type: 'error',
//                 duration: 5 * 1000
//             })
//
//             // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
//             if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
//                 // to re-login
//                 MessageBox.confirm('You have been logged out, you can cancel to stay on this page, or log in again', 'Confirm logout', {
//                     confirmButtonText: 'Re-Login',
//                     cancelButtonText: 'Cancel',
//                     type: 'warning'
//                 }).then(() => {
//                     store.dispatch('user/resetToken').then(() => {
//                         location.reload()
//                     })
//                 })
//             }
//             return Promise.reject(new Error(res.message || 'Error'))
//         } else {
//             return res
//         }
//     },
//     error => {
//         let msg = error.response.data
//         if (!msg) {
//             msg = error.message
//         }
//         if (error.response.status === 401) {
//             MessageBox({
//                 title: '错误提示',
//                 message: msg,
//                 type: 'error'
//             })
//             // 401表示token无效或未登录或超时，此时需要清空token
//             let callback= getCallbackUrl()
//             store.dispatch('user/resetToken')
//             if(callback){
//                 window.location.href=callback;
//             }else{
//                 router.push('/login')
//             }
//             return Promise.reject(error)
//         }
//         if (msg.message) {
//             Message({
//                 message: msg.message,
//                 type: 'error',
//                 duration: 5 * 1000
//             })
//         } else {
//             Message({
//                 message: msg,
//                 type: 'error',
//                 duration: 5 * 1000
//             })
//         }
//         return Promise.reject(error)
//     }
// )

export { service, globals,constants }

export default service
