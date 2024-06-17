import { useState, useEffect } from "react";
import axios from "axios";

export function Effect() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((respons) => {
        setdata(respons.data);
      }, []);
  });

  return (
    <div className="text">
      <h1>UseEffect Ex</h1>
      <h4>Get data from api then print the first 5 emails</h4>
      {data.slice(0, 5).map((elm, index) => (
        <p key={index}>{elm.email}</p>
      ))}
    </div>
  );
}
