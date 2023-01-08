import React, { useEffect, useState } from "react";
import "./App.css";
import "./components/home/Home.css";
import "./components/home/footer/Footer.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Vendor from "./components/vendors/Vendor";
import Home from "./components/home/Home";
import { Footer } from "./components/home/footer/Footer";
import Admin from "./components/Admin/AdminDashBoard/Admin";
import ServiceDetail from "./components/Service-detail/ServiceDetail";
import VendorsList from "./components/VendorsList/VendorsList";

import UserProfile from "./components/Profile/UserProfile";
import UserProfileEdit from "./components/Profile/UserProfileEdit";
import ChangePassword from "./components/Profile/ChangePassword";
import { About } from "./components/About/About";
import Login from "./components/login/Login";
import { Signup } from "./components/signup/Signup";
import { Header1 } from "./components/home/header/Header1";
import UpdateService from "./components/vendors/UpdateService";

function App() {

  const [justBool, setJustBool] = useState(false);
  
  useEffect(() => {
    
  }, [justBool])
  

  return (
    <BrowserRouter>
      <Header1 justBool={justBool} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/vendor" element={<Vendor />}></Route>
        <Route path="/vendorsList" element={<VendorsList />}></Route>
        <Route path="/serviceDetail" element={<ServiceDetail />}></Route>
        <Route path="/userprofile" element={<UserProfile />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
        <Route path="/userprofileedit" element={<UserProfileEdit />}></Route>
        <Route path="/changepassword" element={<ChangePassword />}></Route>
        <Route
          path="/signin"
          element={<Login setJustBool={setJustBool} justBool={justBool} />}
        ></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/updateservice/:id/:uid" element={<UpdateService />}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
