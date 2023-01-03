import "./App.css";
import "./components/home/Home.css"
import "./components/home/footer/Footer.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Vendor from "./components/vendors/Vendor";
import Home from "./components/home/Home
import { Header } from "./components/home/header/Header";
import { Footer } from "./components/home/footer/Footer";
import Admin from "./components/Admin/AdminDashBoard/Admin";
import ServiceDetail from "./components/Service-detail/ServiceDetail";
import VendorsList from "./components/VendorsList/VendorsList";

import UserProfile from "./components/Profile/UserProfile";
import UserProfileEdit from "./components/Profile/UserProfileEdit";
import ChangePassword from "./components/Profile/ChangePassword";
import { About } from "./components/About/About";


function App() {
  return (
    <BrowserRouter>
      <Header></Header>
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
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
