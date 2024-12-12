import { useState, useEffect } from "react";

export const useQuery = ({ url }) => {
  const [fetchState, setFetchState] = useState({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Something went wrong while fetching data.");
        }
        const data = await response.json();
        setFetchState((prev) => ({ ...prev, data }));
      } catch (error) {
        setFetchState((prev) => ({ ...prev, error }));
      } finally {
        setFetchState((prev) => ({ ...prev, loading: false }));
      }
    };

    if (url) {
      fetchData();
    }
  }, [url]);

  return fetchState;
};
