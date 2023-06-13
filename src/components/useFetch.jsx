import { useState, useEffect, useRef } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState([]);

  const hasFetched = useRef(false);

  useEffect(() => {
    if (!hasFetched.current) {
      const fetchData = async () => {
        try {
          const response = await axios.get(url);
          console.log(response);
          setData(response.data.products);
        } catch (error) {
          console.log(error);
        }
      };

      fetchData();

      return () => (hasFetched.current = true);
    }
  }, [url]);

  return { data };
};

export default useFetch;
