import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Vendor from "./components/vendors/Vendor";
import Home from "./components/home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/vendor" element={<Vendor />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
