import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      // navigate("/");
      navigate(-1); // previous screen
    }, 2000);
  }, [navigate]);

  return (
    <div>
      <h1>Page Not Found</h1>
      {/* Directly redirect to specified screen */}
      {/* <Navigate to="/" /> */}
    </div>
  );
};

export default NotFound;
