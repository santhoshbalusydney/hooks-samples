import React, { useEffect, useState } from "react";
import { useForm } from "./useForm";
import { useFetch } from "./useFetch";
import TodosApp from "./TodosApp";

const App = () => {
  //test
  const [values, handleChange] = useForm({
    email: "",
    password: "",
    firstName: ""
  });
  const [count, setCount] = useState(0);
  // const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);
  const { data, loading } = useFetch(`https://jsonplaceholder.typicode.com/todos/${count}`);

  return (
    <TodosApp />
    // <div>
    //   <div>{!data ? "loading..." : data}</div>
    //   <div>count: {count}</div>
    //   <button onClick={() => setCount(c => c + 1)}>increment</button>
    //   <>
    //     <input name="email" value={values.email} onChange={handleChange} />
    //     <input
    //       name="firstName"
    //       placeholder="first name"
    //       value={values.firstName}
    //       onChange={handleChange}
    //     />
    //     <input
    //       type="password"
    //       name="password"
    //       value={values.password}
    //       onChange={handleChange}
    //     />
    //   </>
    // </div>
  );
};

export default App;
