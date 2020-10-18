const API_BASE =
  'https://private-8e8921-woloxfrontendinverview.apiary-mock.com';
const API_LOGIN = `${API_BASE}/login`;
const API_TECHS = `${API_BASE}/techs`;
import { useFetchData } from '../hooks/useFetchData';

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

export const getTechList = () => {
  const [state] = useFetchData(API_TECHS);

  return state;
};
