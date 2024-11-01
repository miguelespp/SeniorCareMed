import { Navigate } from "react-router-dom";

const RequireAuth = () => {
  if (!localStorage.getItem("token")) {
    return <Navigate to="/auth/login" />;
  }

  return null;
};

export default RequireAuth;
