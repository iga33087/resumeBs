import axios from "axios"
import router from '@/router'

let baseUrl=process.env.VUE_APP_OIDC_BASEURL

axios.interceptors.request.use(
  config => {
    config.headers = { // 如果沒有cors的問題則可以都不加
      "token": localStorage.token,
    };
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  response => {
    if(response.data=="token invalid") {
      alert("認證已過期，請重新登入")
      router.push({name:"login"})
      localStorage.token=""
    }
    return response;
  },
  err => {
    if (err && err.response) {
      switch (err.response.status) {
        case 404:
          console.log("找不到該頁面");
          break;
        case 500:
          console.log("伺服器出錯");
          break;
        case 503:
          console.log("服務失效");
          break;
        default:
          console.log(`連接錯誤${err.response.status}`);
      }
    } else {
      console.log("連接到服務器失敗");
    }
    return Promise.resolve(err.response);
  }
);

export default {
  testReq(x) {
    return axios.post(baseUrl+"testReq",x).then(res=>res.data)
  },
  login(x) {
    return axios.post(baseUrl+"login",x).then(res=>res.data)
  },
  getViewList() {
    return axios.get(baseUrl+"getViewList").then(res=>res.data)
  },
  deleteViewList(x) {
    return axios.delete(baseUrl+"deleteViewList?id="+x).then(res=>res.data)
  }
}