import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Vendor from "./components/vendors/Vendor";
import Home from "./components/home/Home";
import Admin from "./components/Admin/AdminDashBoard/Admin";
import ServiceDetail from "./components/Service-detail/ServiceDetail";
import VendorsList from "./components/VendorsList/VendorsList";
import UserProfile from "./components/Profile/UserProfile";
import UserProfileEdit from "./components/Profile/UserProfileEdit";
import ChangePassword from "./components/Profile/ChangePassword";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/vendor" element={<Vendor />}></Route>
        <Route path="/vendorsList" element={<VendorsList />}></Route>
        <Route path="/serviceDetail" element={<ServiceDetail />}></Route>
        <Route path="/userprofile" element={<UserProfile />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
        <Route path="/userprofileedit" element={<UserProfileEdit />}></Route>
        <Route path="/changepassword" element={<ChangePassword />}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
