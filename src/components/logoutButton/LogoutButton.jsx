import React from "react";
import "./LogoutButton.css";
import { logout } from "../../features/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import firebaseApp from "../../firebase";

function LogoutButton() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutOfApp = () => {
    const auth = getAuth(firebaseApp);

    signOut(auth)
      .then(() => {
        dispatch(logout());
        navigate("/");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <button className="logoutButton" onClick={logoutOfApp}>
      Log Out
    </button>
  );
}

export default LogoutButton;
