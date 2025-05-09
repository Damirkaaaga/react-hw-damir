import { useEffect, useState } from "react";

const useFetch = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url, options);
        const json = await res.json();
        setData(json);
        setStatus(res.status);

        const log = {
          payload: options.body || null,
          status: res.status,
        };
        localStorage.setItem("fetch-log", JSON.stringify(log));
      } catch (err) {
        setError(err);
        setStatus("error");
      }
    };

    fetchData();
  }, [url]);

  return { data, status, error };
};

export default useFetch;
