import Navbar from "./Navbar";
import { GoogleLogin } from "@react-oauth/google";
const Landing = () => {
  const responseMessage = (response) => {
    console.log(response);
  };
  const errorMessage = (error) => {
    console.log(error);
  };
  return (
    <>
      <Navbar></Navbar>
      <div className="Anurag">
        <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
      </div>
    </>
  );
};

export default Landing;
