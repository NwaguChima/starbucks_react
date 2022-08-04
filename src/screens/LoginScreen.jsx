import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./LoginScreen.css";
import { useForm } from "react-hook-form";
import { TextField } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import ReportProblemRoundedIcon from "@material-ui/icons/ReportProblemRounded";
import VisibilityOffOutlinedIcon from "@material-ui/icons/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import FooterSecondary from "../components/footerSecondary/FooterSecondary";
import FormSubmit from "../components/formSubmit/FormSubmit";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";

const LoginScreen = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const [passwordShown, setPasswordShown] = useState(false);
  const dispatch = useDispatch();

  const onSubmit = ({ email, password }) => {
    console.log(email, password);
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userAuth) => {
        console.log("userAuth", userAuth);
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
          })
        );
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="loginScreen">
      <div className="loginScreen__left">
        <Link to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png"
            alt="logo starbucks"
          />
        </Link>
        <div className="loginScreen__info">
          <h1>Sign in or create an account</h1>
        </div>
      </div>
      <div className="loginScreen__right">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div className="loginScreen__inputContainer">
            <TextField
              name="email"
              type="email"
              label="Email Address"
              inputlabelprops={{ style: { color: "rgba(0, 0, 0, .56)" } }}
              inputProps={{
                style: { fontWeight: "800" },
              }}
              className="loginScreen__input"
              inputRef={register("email", { required: true })}
            />
            {errors.email && (
              <div className="loginScreen__error">
                <CloseIcon fontSize="small" />
                <span>Enter an email.</span>
                <ReportProblemRoundedIcon
                  fontSize="small"
                  className="loginScreen__reportIcon"
                />
              </div>
            )}
          </div>
          <div className="loginScreen__inputContainer">
            <TextField
              name="password"
              type={passwordShown ? "text" : "password"}
              label="Password"
              inputlabelprops={{ style: { color: "rgba(0, 0, 0, .56)" } }}
              inputProps={{
                style: { fontWeight: "800" },
              }}
              className="loginScreen__input"
              inputRef={register("password", { required: true })}
            />
            {passwordShown ? (
              <VisibilityOutlinedIcon
                onClick={() => setPasswordShown(!passwordShown)}
                className="loginScreen__visibilityIcon"
              />
            ) : (
              <VisibilityOffOutlinedIcon
                onClick={() => setPasswordShown(!passwordShown)}
                className="loginScreen__visibilityIcon"
              />
            )}
            {errors.password && (
              <div className="loginScreen__error">
                <CloseIcon fontSize="small" />
                <span>Enter an password.</span>
                <ReportProblemRoundedIcon
                  fontSize="small"
                  className="loginScreen__reportIcon"
                />
              </div>
            )}
          </div>
          <div className="loginScreen__resetLinks">
            <Link to="/">Forgot your username?</Link>
            <Link to="/">Forgot your password?</Link>
          </div>
          <FormSubmit name="Sign in" type="submit" />
        </form>

        <div className="loginScreen__rewards">
          <h4>JOIN STARBUCK@ REWARDS</h4>
        </div>
        <div className="loginScreen__joinNow">
          <div className="loginScreen__joinNowContainer">
            <Link to="/account/create">Join Now</Link>
            <h3>Create an account and bring on the Rewards!</h3>
            <p>
              Join Starbucks@ Rewards to earn free food and drinks, get free
              refills, pay and order with your phoem, and more.
            </p>
          </div>
        </div>
        <FooterSecondary paddingLeft={30} flexDirection="column" />
      </div>
    </div>
  );
};

export default LoginScreen;
