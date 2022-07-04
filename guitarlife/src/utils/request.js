import axios from 'axios'

export const post = (url, data = {}) => {
  return new Promise((resolve, reject) => {
    axios.post(url, data, {
      baseURL:'/api',
      timeout: 5000,
      headers: {
        'Content-Type': 'application/json',
        // 'Access-Control-Allow-Origin': 'http://localhost:8080'
      }
    }).then((res) => {
      resolve(res)
    }, err => {
      reject(err)
    })
  })
}
// export default get = (url, data = {}) => {
//   return new Promise((resolve, reject)=> {
//     axios.get(url, data ,{
//       baseURL:'/api',
//       timeout: 5000,
//       headers: {
//         'Content-Type': 'application/json',
//       }
//     }).then((res) => {
//       resolve(res)
//     }, err =>{
//       reject(err)
//     })
//   })
// }
