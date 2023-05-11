import { Navigate } from "react-router-dom";
import { isLoggedIn } from "./common";

const ProtectedRoute = (props: any) => {
  const isLogIn = isLoggedIn();

  if (!isLogIn) {
    return <Navigate to="/login" replace={true} />;
  }
  return props.children;
};

export default ProtectedRoute;
