import React, { useState, useRef, useLayoutEffect } from "react";
import { useForm } from "./useForm";
import { Hello } from "./Hello";

const App = () => {
  const [values, handleChange] = useForm({
    email: "",
    password: "",
    firstName: ""
  });
  const inputRef = useRef();

  useLayoutEffect(() => {
    console.table(inputRef.current.getBoundingClientRect());
  }, []);

  return (
    <div>
      <>
        <input
          ref={inputRef}
          name="email"
          value={values.email}
          onChange={handleChange}
        />
        <input
          ref={inputRef}
          name="firstName"
          placeholder="first name"
          value={values.firstName}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
        />
        <button
          onClick={() => {
            inputRef.current.focus();
          }}
        >
          focus
        </button>
      </>
    </div>
  );
};

export default App;