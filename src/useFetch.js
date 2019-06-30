import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error();
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }

    };

    fetchData();
  },[url]);

  return [data, loading, error];
}

export { useFetch };