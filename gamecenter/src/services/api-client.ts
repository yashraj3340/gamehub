import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
   params: {
    key: '381e7858b224461bb093d551347eda05'
   }
})