import { useEffect, useState } from "react";

type FetchOptions = RequestInit;

type UseFetchResult<T> = {
  data: T | null;
  status: number | string | null;
  error: unknown;
};

const useFetch = <T = unknown>(
  url: string,
  options: FetchOptions = {}
): UseFetchResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [status, setStatus] = useState<number | string | null>(null);
  const [error, setError] = useState<unknown>(null);

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
