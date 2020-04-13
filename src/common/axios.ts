import axios from "axios";

import { apiUrl } from "./consts";

const axiosCustom = axios.create({
  baseURL: apiUrl,
});

export const get = (url: string, term: any) =>
  axiosCustom
    .get(url, term)
    .then((res) => res.data)
    .catch((err) => Promise.reject(err));
