import axios from "axios";

import { apiUrl } from "./consts";

const axiosCustom = axios.create({
  baseURL: apiUrl
});

export const get = (url: string, payload: object) =>
  axiosCustom
    .get(url, payload)
    .then(res => res.data)
    .catch(err => Promise.reject(err));
