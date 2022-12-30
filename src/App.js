import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Vendor from "./components/vendors/Vendor";
import Home from "./components/home/Home";
import ServiceDetail from "./components/Service-detail/ServiceDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/vendor" element={<Vendor />}></Route>
        <Route path="/serviceDetail" element={<ServiceDetail />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
