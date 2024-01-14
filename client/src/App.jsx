import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Home from "./components/HomePage";
import PrivateRoute from "./components/PrivateRoute";

import UserDetailContextProvider from "./contextProvider/UserDetailProvider";
function App() {
  return (
    <UserDetailContextProvider>
      <div className="app">
        <Navbar></Navbar>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          ></Route>
        </Routes>
      </div>
    </UserDetailContextProvider>
  );
}

export default App;
