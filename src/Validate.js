import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { gql } from "@apollo/client";
import { Styles } from "./style";

// import saveData from "./some_other_file";

const VALIDATE_OTP = gql`
  mutation VerifyOtp($mobileNo: String!, $otp: String!) {
    verifyOtp(mobileNo: $mobileNo, otp: $otp) {
      success
      accountErrors {
        message
      }
    }
  }
`;

function ValidateForm(props) {
  // const [generateOtp, { data, loading, error }] = useMutation(GENERATE_OTP);
  const [submitted, setSubmitted] = useState(false);
  const [verifyOtp, { data, loading, error }] = useMutation(VALIDATE_OTP);

  const [otp, setOtp] = useState("");

  const handleChange = (event) => {
    setOtp(event.target.value);
    // console.log(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    verifyOtp({ variables: { mobileNo: props.mNo, otp: otp } });
    setSubmitted(true);
    console.log(props.mNo);
    console.log(otp);
  };

  return (
    <form>
      <label>Otp Checker</label>
      <input
        name="Otp"
        value={otp}
        onChange={handleChange}
        className="form-field"
        placeholder="Enter the OTP No."
      />
      <button type="submit" className="form-field" onClick={handleSubmit}>
        Check OTP
      </button>
    </form>
  );
}

export default function ValidateOtp(props) {
  return (
    <Styles>
      <ValidateForm mNo={props.mNo} />
    </Styles>
  );
}
