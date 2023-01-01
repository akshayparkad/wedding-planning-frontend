import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Vendor from "./components/vendors/Vendor";
import Home from "./components/home/Home";
import Admin from "./components/Admin/AdminDashBoard/Admin";
import ServiceDetail from "./components/Service-detail/ServiceDetail";
import VendorsList from "./components/VendorsList/VendorsList";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/vendor" element={<Vendor />}></Route>
        <Route path="/vendorsList" element={<VendorsList />}></Route>
        <Route path="/serviceDetail" element={<ServiceDetail />}></Route>
        <Route path="/admin" element={<Admin />}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
