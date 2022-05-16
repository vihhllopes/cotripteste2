import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main/home";
import Login from "./pages/Login/login";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
