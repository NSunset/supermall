import axios from "axios";

export function ApiRequest(config) {
  const api = axios.create({
    baseURL: "http://localhost:5005/",
    timeout: 5000,
  });

  //拦截请求
  api.interceptors.request.use(
    (config) => {
      return config;
    },
    (err) => {
      console.log(err);
    }
  );

  //拦截响应
  api.interceptors.response.use(
    (resonse) => {
      return resonse.data;
    },
    (err) => {
      console.log(err);
    }
  );

  return api(config);
}
