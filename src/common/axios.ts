import axios, { AxiosRequestConfig } from "axios";

import { apiUrl } from "./consts";

const axiosCustom = axios.create({
  baseURL: apiUrl,
});

export const get = (url: string, link?: AxiosRequestConfig | undefined) =>
  axiosCustom
    .get(url, link)
    .then((res) => res.data)
    .catch((err) => Promise.reject(err));
