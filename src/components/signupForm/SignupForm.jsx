import { TextField } from "@material-ui/core";
import React from "react";
import { useForm } from "react-hook-form";
import CloseIcon from "@material-ui/icons/Close";
import ReportProblemRoundedIcon from "@material-ui/icons/ReportProblemRounded";
import "./SignupForm.css";

const SignupForm = () => {
  const { register, handleSubmit, watch, errors } = useForm();

  return (
    <div className="signupForm">
      <div className="signupForm__container">
        <form onSubmit={handleSubmit()} className="signupForm__form">
          <h4 className="signupForm__section">Personal Information</h4>
          <div className="signupForm__inputContainer">
            <TextField
              name="fName"
              label="First name"
              type="text"
              InputLabelProps={{
                style: { color: "rgba(0,0,0,.56)" },
              }}
              InputProps={{ style: { fontWeight: "800" } }}
              className="signupForm__input"
              inputRef={register({ required: true })}
            />
            {errors.fName && (
              <div className="signupForm__error">
                <CloseIcon fontSize="small" />
                <span>Enter your first name.</span>
                <ReportProblemRoundedIcon
                  fontSize="small"
                  className="signupForm__reportIcon"
                />
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
