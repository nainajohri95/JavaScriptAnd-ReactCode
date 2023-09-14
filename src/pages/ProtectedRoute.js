import React from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

function ProtectedRoute() {
  const isLoggedIn = true;

  return <>{isLoggedIn ? <Outlet /> : <Navigate to="/login" />}</>;
}

export default ProtectedRoute;
