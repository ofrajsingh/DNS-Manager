import { useContext } from "react";
import UserDetailContext from "../context/UserDetailContext";
function Home() {
  const { isLoggedin, setIsloggedIn, userName, setUserName } =
    useContext(UserDetailContext);
  return (
    <>
      <div className="home">Welcome {userName}</div>
    </>
  );
}

export default Home;
