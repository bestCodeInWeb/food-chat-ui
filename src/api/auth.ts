import axios from 'axios';

const BASE_URL = 'http://localhost:8080/realms/food-user/protocol/openid-connect/token';

export const login = (username: string, password: string) => {
  return axios.post(`${BASE_URL}`, {
    grant_type: 'password',
    client_id: 'food-app-ui',
    username,
    password
  }, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;application/json;charset=UTF-8',
      'Access-Control-Allow-Headers': 'X-Custom-Header, Upgrade-Insecure-Requests'
    }
  });
}
