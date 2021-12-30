import { useState, useEffect } from "react";

export default function UseFetch(url) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(url);
        const json = await res.json();

        setData(json);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(
          "Sorry, we are facing issues while fetching jobs. Please try again later"
        );
      }
    };

    fetchData();
  }, [url]);

  return { loading, data, error };
}
