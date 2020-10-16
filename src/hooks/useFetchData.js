import { useState, useEffect, useReducer } from 'react';

const fetchDataReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_INIT':
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        isLoading: false,
        error: null,
        data: action.payload,
      };
    case 'FETCH_FAILURE':
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

export const useFetchData = (initialUrl, initialData = {}) => {
  const [url, setUrl] = useState(initialUrl);
  const [state, dispatch] = useReducer(fetchDataReducer, {
    isLoading: true,
    error: null,
    data: initialData,
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_INIT' });
      try {
        const response = await fetch(url);
        const result = await response.json();

        dispatch({ type: 'FETCH_SUCCESS', payload: result });
      } catch (err) {
        dispatch({ type: 'FETCH_FAILURE', payload: err });
      }
    };

    fetchData();
  }, [url]);

  return [state, setUrl];
};
