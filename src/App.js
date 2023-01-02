import logo from "./logo.svg";
import "./App.css";
import "./components/home/Home.css"
import "./components/home/footer/Footer.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Vendor from "./components/vendors/Vendor";
import Home from "./components/home/Home";
import { Header } from "./components/home/header/Header";
import { Footer } from "./components/home/footer/Footer";
function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/vendor" element={<Vendor />}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
