import React, { useState, useMemo } from "react";
import { useFetch } from "./useFetch";

function computeBig(arr) {
  if (!arr) {
    return [];
  }

  console.log("computing something big");


  return 'computingbig';
}

const App = () => {
  const [count, setCount] = useState(0);
  const { data } = useFetch(
    "https://jsonplaceholder.typicode.com/todos/1"
  );

  // const bigvalue = computeBig(data);
  const bigvalue = useMemo(() => computeBig(data), [data]);

  return (
    <div>
      <div>count: {count}</div>
      <button onClick={() => setCount(count + 1)}>increment</button>
      <div>{bigvalue}</div>
    </div>
  );
};

export default App;