// 配置API接口地址
// 引用axios
var axios = require('axios')
// 自定义判断元素类型JS
function toType (obj) {
  return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}
// 参数过滤函数
function filterNull (o) {
  for (var key in o) {
    if (o[key] === null) {
      delete o[key]
    }
    if (toType(o[key]) === 'string') {
      o[key] = o[key].trim()
    } else if (toType(o[key]) === 'object') {
      o[key] = filterNull(o[key])
    } else if (toType(o[key]) === 'array') {
      o[key] = filterNull(o[key])
    }
  }
  return o
}

function apiAxios (method, url, params, success, failure) {
  if (params) {
    params = filterNull(params)
  }
  let CancelToken = axios.CancelToken
  axios({
    method: method,
    url: url,
    data: method === 'POST' || method === 'PUT' ? params : null,
    params: method === 'GET' || method === 'DELETE' ? params : null,
    // baseURL: root,
    withCredentials: false,
    cancelToken: new CancelToken(function executor(c) {
      window.Vue.cancel = c
      // 这个参数 c 就是CancelToken构造函数里面自带的取消请求的函数，这里把该函数当参数用
    })
  })
  .then(function (res) {
    success(res.data)
  })
  .catch(function (err) {
    let res = err
    if (err) {
      // window.alert('api error, HTTP CODE: ' + res)
    }
  })
}

axios.interceptors.request.use(
  config => {
      // if (window.Vue.$common.getCookie('token')) {  // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
      //   // 每次发请求重置token
      //   let d = new Date(window.Vue.$common.getCookie('token'));
      //   d.setTime(d.getTime()  +  1000 * 60 *30);
      //   let expires = "expires=" + d.toUTCString();
      //   document.cookie = "token="+ window.Vue.$common.getCookie('token') +";expires="+expires;
      //   config.headers.Authorization = window.Vue.$common.getCookie('token');
      // }
      return config;
  },
  err => {
      return Promise.reject(err);
  });

//     // 错误提示
//   axios.interceptors.response.use(
//     response => {

//       console.log(response);
//       if(response.data.code===502){
//         localStorage.removeItem("token")
//           router.replace({
//               path: 'login',
//               query: {redirect: router.currentRoute.fullPath}//登录成功后跳入浏览的当前页面
//           })
//       }
//         return response;
//     },
//     error => {
//         if (error.response) {
//             switch (error.response.status) {
//                 case 401:
//                     window.Vue.$router.push("login")
//                     break;
//                 case 417:
//                   window.Vue.$message({
//                       type: 'error',
//                       duration:'2000',
//                       // message:error.response.data.error_description
//                       message:"验证码不正确"
//                   });
//                   break;
//                 case 426:
//                     window.Vue.$message({
//                         type: 'error',
//                         duration:'2000',
//                         message:"用户名密码无效"
//                     });
//                     break;
//                 case 428:
//                     window.Vue.$message({
//                         type: 'error',
//                         duration:'2000',
//                         message:"验证码无效"
//                     });
//                     break;
//             }
//         }
//         return Promise.reject(error.response.data) 
//     });

// 返回在vue模板中的调用接口
export default {
  get: function (url, params, success, failure) {
    return apiAxios('GET', url, params, success, failure)
  },
  post: function (url, params, success, failure) {
    return apiAxios('POST', url, params, success, failure)
  },
  put: function (url, params, success, failure) {
    return apiAxios('PUT', url, params, success, failure)
  },
  delete: function (url, params, success, failure) {
    return apiAxios('DELETE', url, params, success, failure)
  }
}