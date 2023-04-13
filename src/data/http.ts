import axios from 'axios';
import * as urls from './urls';

const localAxios = axios.create({
  baseURL: urls.baseUrl,
  params: {
    api_key: urls.apiKey,
    language: urls.lang,
    page: 1
  }
});

localAxios.interceptors.response.use(
  (response) => {
    return {
      status: response.status,
      ...response.data
    };
  },
  async (error) => {
    const _error = {
      status: error?.response?.status,
      ...error?.response?.data
    };
    return await Promise.reject(_error);
  }
);

export default localAxios;
