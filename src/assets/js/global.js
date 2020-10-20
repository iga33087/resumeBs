import { Promise } from "core-js"
import moment from "moment"

export default {
  delay(x) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, x);
    });
  },
  YYYYMMDD(x) {
    return moment(x).format("YYYY/MM/DD")
  },
  YYYYMMDDHHmm(x) {
    return moment(x).format("YYYY/MM/DD HH:mm")
  }
}