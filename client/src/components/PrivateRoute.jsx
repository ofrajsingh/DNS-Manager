import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  let isAuth = true;
  return isAuth ? <>{children}</> : <Navigate to="/login" />;
}

export default PrivateRoute;
