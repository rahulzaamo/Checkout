import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { gql } from "@apollo/client";
import { Styles } from "./style";
import ValidateOtp from "./Validate";
import Link from "next/link";
import { Router, Route, Switch } from "react-router-dom";

// import saveData from "./some_other_file";

const GENERATE_OTP = gql`
  mutation TokenCreate($mobileNo: String!) {
    # generateOtp(mobileNo: $mobileNo) {
    #   success
    #   accountErrors {
    #     message
    #   }
    # }
    tokenCreate(email: "admin@zaamo.co", password: $mobileNo) {
      token
    }
  }
`;

function Form() {
  const [isotpgeneratedsuccessfully, setIsOtpGeneratedSuccessFully] = useState(
    false
  );
  const [generateOtp, { data, loading, error }] = useMutation(GENERATE_OTP);
  const [mobileNo, setMobileNo] = useState("");

  const handleValue = (event) => {
    setMobileNo(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    generateOtp({ variables: { mobileNo: mobileNo } });
    setIsOtpGeneratedSuccessFully(true);
    console.log(mobileNo);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter Mobile Number:</label>
      <input
        placeholder="Enter Mobile No"
        value={mobileNo}
        required
        onChange={handleValue}
        className="form-field"
      />
      {isotpgeneratedsuccessfully === false ? (
        <button type="submit">Generate OTP</button>
      ) : (
        // <Router>
        //   <Switch>
        //     <Route path="/">
        <ValidateOtp mNo={mobileNo} />
        //     </Route>
        //   </Switch>
        // </Router>
      )}
      {/* <button type="submit">Generate OTP</button> */}
    </form>
  );
}

export default function App() {
  return (
    <Styles>
      <Form />
    </Styles>
  );
}
