import axios from "axios"

let baseUrl=process.env.VUE_APP_OIDC_BASEURL

export default {
  getViewList() {
    return axios.get(baseUrl+"getViewList").then(res=>res.data)
  },
  deleteViewList(x) {
    return axios.delete(baseUrl+"deleteViewList?id="+x).then(res=>res.data)
  }
}