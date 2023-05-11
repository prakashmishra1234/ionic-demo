import { Navigate } from "react-router-dom";
import { isLoggedIn } from "./common";

const PublicRoute = (props: any) => {
  const isLogIn = isLoggedIn();

  if (!isLogIn) {
    return props.children;
  }
  return <Navigate to="/home" replace={true} />;
};

export default PublicRoute;
