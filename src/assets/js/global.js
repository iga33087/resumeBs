import moment from "moment"

export default {
  YYYYMMDD(x) {
    return moment(x).format("YYYY/MM/DD")
  },
  YYYYMMDDHHmm(x) {
    return moment(x).format("YYYY/MM/DD HH:mm")
  }
}