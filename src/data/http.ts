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
  function (response) {
    return {
      status: response.status,
      ...response.data
    };
  },
  async function (error) {
    return await Promise.reject(error);
  }
);

export default localAxios;
