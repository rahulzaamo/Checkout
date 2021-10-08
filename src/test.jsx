import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

import saveData from "./some_other_file";

function Form() {
  const { register, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit((data) => saveData(data))}>
      <label>Name</label>
      <input name="name" ref={register} />
      <label>Address</label>
      <input name="address" ref={register} />
      <label>Date</label>
      <input name="date" ref={register} />
      <label>Order Number</label>
      <input name="order" ref={register} />
      <input type="submit" className="submitButton" />
    </form>
  );
}

export default function App() {
  return <Form />;
}
