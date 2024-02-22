
import React, { useEffect, useState } from "react";
import './../styles/App.css';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState("");
  const fetchData = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const parseData = await response.json();
      setData(parseData);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return loading ? <b>Loading...</b> : <div>{JSON.stringify(data)}</div>;
}

export default App
