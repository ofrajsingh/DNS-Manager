import { GoogleLogin } from "@react-oauth/google";
import { login } from "../../api";
import { useNavigate } from "react-router-dom";
import userDetail from "../context/UserDetailContext";
import { useContext } from "react";

function SignInBtn() {
  const { isLoggedIn, setIsLoggedIn } = useContext(userDetail);
  const navigate = useNavigate();
  const responseMessage = (response) => {
    const resGet = login(response.credential, response.clientId);
    resGet
      .then((res) => {
        const token = res.data.token;
        localStorage.setItem("token", token);
        setIsLoggedIn(true);
        navigate("/home");
      })
      .catch((err) => {
        localStorage.removeItem("token"); //expired or invalid token
        alert("Token Expired or invalid");
        window.location.reload();
      });
  };
  const errorMessage = (error) => {
    console.log(error);
  };
  return (
    <div className="googleBtn">
      <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
    </div>
  );
}
export default SignInBtn;
