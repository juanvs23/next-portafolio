
import axios from 'axios';
import {useState,useEffect} from 'react'
export const useFetch = (url) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;
      const fetchData = async () => {
        try {
          axios.get(url)
          .then(res=>setResponse(res))
        } catch (error) {
          setError(error);
        }
      };
      
      fetchData();
      return function cleanup() {
        abortController.abort();
      };
    }, [url]);
    return { response, error };
  };