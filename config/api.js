import axios from 'axios';
const APIURL = '';

function getApi(path, option = {}) {
  return axios.get(`${APIURL}/${path}`, {
    ...option,
    headers: option.headers,
  });
}

function postApi(path, data, option = {}) {
  return axios.post(`${APIURL}/${path}`, data, {
    ...option,
    ...option,
    headers: option.headers,
  });
}

function putApi() {}

function deleteApi() {}

const Api = {
  get: getApi,
  post: postApi,
  put: putApi,
  delete: deleteApi,
};
export default Api;
