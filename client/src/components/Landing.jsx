import { useState } from "react";
import Navbar from "./Navbar";
import { GoogleLogin } from "@react-oauth/google";
import { login } from "../../api";
const Landing = () => {
  const responseMessage = (response) => {
    const resGet = login(response.credential, response.clientId);
    resGet.then((res) => {
      console.log(res);
    });
  };
  const errorMessage = (error) => {
    console.log(error);
  };
  return (
    <>
      <Navbar></Navbar>
      <div className="Anurag">
        <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />

        {/* <button onClick={() => login()}>Sign in with Google 🚀 </button> */}
      </div>
    </>
  );
};

export default Landing;
