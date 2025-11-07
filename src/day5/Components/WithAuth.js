// withAuth.js
import React from "react";
import { Navigate } from "react-router-dom";

const withAuth = (WrappedComponent) => {
  return (props) => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      return <Navigate to="/" replace />;
    }
    return <WrappedComponent {...props} />;
  };
};

export default withAuth;