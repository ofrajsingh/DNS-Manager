import React, { useState } from "react";
import UserDetailContext from "../context/UserDetailContext.jsx"; // Assuming it's in the same directory

function UserDetailContextProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <UserDetailContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </UserDetailContext.Provider>
  );
}

export default UserDetailContextProvider;
