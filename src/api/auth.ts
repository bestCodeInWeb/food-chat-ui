import axios from 'axios';

const BASE_URL = 'https://localhost:8443/realms/alex/protocol/openid-connect/token';
// 'https://localhost:8443/admin/realms/alex/users'
// 'http://<domain.com>/auth/realms/<realm-name>/protocol/openid-connect/registrations'

export const login = (username: string, password: string) => {
  return axios.post(`${BASE_URL}`, {
    grant_type: 'password',
    client_id: 'food-app-ui',
    username,
    password
  }, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  });
}

export const register = async (username: string, password: string) => {
  const data = await login('alex-admin', 'alex-admin');

  return axios.post('https://localhost:8443/admin/realms/alex/users', {
    username,
    enabled: true,
    credentials: [
      {
        type: 'password',
        value: password,
        temporary: false
      }
    ]
  }, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${data.data.access_token}`
    }
  });
}
