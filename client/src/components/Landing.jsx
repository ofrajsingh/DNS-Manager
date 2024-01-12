import { useState } from "react";
import Navbar from "./Navbar";
import { GoogleLogin } from "@react-oauth/google";
import { login } from "../../api";
const Landing = () => {
  const responseMessage = (response) => {
    const resGet = login(response.credential, response.clientId);
    // console.log(response);
    resGet.then((res) => {
      console.log(res);
      const token = res.data.token;
      localStorage.setItem("token", token);
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
      </div>
    </>
  );
};

export default Landing;
