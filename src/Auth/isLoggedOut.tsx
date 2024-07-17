import React from "react";
import { Navigate } from "react-router-dom";

const isLoggedOut = <P extends object>(
  WrappedComponent: React.ComponentType
): React.FC<P> => {
  return () => {
    const token = localStorage.getItem("userToken");

    if (token) {
      return <Navigate to="/post" />;
    }

    return <WrappedComponent />;
  };
};

export default isLoggedOut;
