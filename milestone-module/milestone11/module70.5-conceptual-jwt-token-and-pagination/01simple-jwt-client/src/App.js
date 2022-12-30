import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Login from "./components/Login";
import Orders from "./components/Orders";
import Header from "./components/Header";
import './App.css';
import Inventory from "./components/Inventory";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="orders" element={<Orders/>} />
        <Route path="about" element={<About />} />
        <Route path='/inventory' element={<Inventory></Inventory>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;