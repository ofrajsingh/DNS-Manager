import { GoogleLogin } from "@react-oauth/google";
import { login } from "../../api";
function SignInBtn() {
  const responseMessage = (response) => {
    const resGet = login(response.credential, response.clientId);
    resGet
      .then((res) => {
        const token = res.data.token;
        localStorage.setItem("token", token);
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
