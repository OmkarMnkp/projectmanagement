import { useState, useEffect } from 'react';

const Usefetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
    };
    getData();
  }, [url]);

  return { data };
};

export default Usefetch;
