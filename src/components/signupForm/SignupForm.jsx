import { TextField } from "@material-ui/core";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import CloseIcon from "@material-ui/icons/Close";
import ReportProblemRoundedIcon from "@material-ui/icons/ReportProblemRounded";
import VisibilityOffOutlinedIcon from "@material-ui/icons/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import "./SignupForm.css";

const SignupForm = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const [passwordShown, setPasswordShown] = useState(false);

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

          <div className="signupForm__inputContainer">
            <TextField
              name="lName"
              label="Last name"
              type="text"
              InputLabelProps={{
                style: { color: "rgba(0,0,0,.56)" },
              }}
              InputProps={{ style: { fontWeight: "800" } }}
              className="signupForm__input"
              inputRef={register({ required: true })}
            />
            {errors.lName && (
              <div className="signupForm__error">
                <CloseIcon fontSize="small" />
                <span>Enter your last name.</span>
                <ReportProblemRoundedIcon
                  fontSize="small"
                  className="signupForm__reportIcon"
                />
              </div>
            )}
          </div>

          <h4 className="signupForm__section">Account Security</h4>
          <div className="signupForm__inputContainer">
            <TextField
              name="email"
              label="Email Address"
              type="email"
              InputLabelProps={{
                style: { color: "rgba(0,0,0,.56)" },
              }}
              InputProps={{ style: { fontWeight: "800" } }}
              className="signupForm__input"
              inputRef={register({ required: true })}
            />
            {errors.email && (
              <div className="signupForm__error">
                <CloseIcon fontSize="small" />
                <span>Enter an email.</span>
                <ReportProblemRoundedIcon
                  fontSize="small"
                  className="signupForm__reportIcon"
                />
              </div>
            )}
          </div>

          <div className="signupForm__inputContainer">
            <TextField
              name="password"
              label="Password"
              type={passwordShown ? "text" : "password"}
              InputLabelProps={{
                style: { color: "rgba(0,0,0,.56)" },
              }}
              InputProps={{ style: { fontWeight: "800" } }}
              className="signupForm__input"
              inputRef={register({ required: true })}
            />
            {passwordShown ? (
              <VisibilityOutlinedIcon
                onClick={() => setPasswordShown(!passwordShown)}
                className="signupForm__visibilityIcon"
              />
            ) : (
              <VisibilityOffOutlinedIcon
                onClick={() => setPasswordShown(!passwordShown)}
                className="signupForm__visibilityIcon"
              />
            )}
            {errors.password && (
              <div className="signupForm__error">
                <CloseIcon fontSize="small" />
                <span>Enter an password.</span>
                <ReportProblemRoundedIcon
                  fontSize="small"
                  className="login__reportIcon"
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
