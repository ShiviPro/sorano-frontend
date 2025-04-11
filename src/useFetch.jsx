import { useState, useEffect } from "react";
const useFetch = (url, initialData) => {
  const [data, setData] = useState(initialData);
  const [dataCopy, setDataCopy] = useState(initialData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setDataCopy(data);
      })
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, [url]);
  return { data, setData, dataCopy, loading, error };
};
export default useFetch;
