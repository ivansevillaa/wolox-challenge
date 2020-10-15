const API_BASE = 'http://private-8e8921-woloxfrontendinverview.apiary-mock.com';
const API_LOGIN = `${API_BASE}/login`;

export const login = (values) => {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: {
      email: values.email,
      password: values.password,
    },
  };

  return fetch(API_LOGIN, requestOptions);
};
