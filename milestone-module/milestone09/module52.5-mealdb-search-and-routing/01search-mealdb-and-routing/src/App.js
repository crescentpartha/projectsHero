// import logo from './logo.svg';
import { Routes, Route } from "react-router-dom";
import './App.css';
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from './components/Home/Home';
import MealDetail from "./components/MealDetail/MealDetail";
import NotFound from "./components/NotFound/NotFound";
import Restaurant from "./components/Restaurant/Restaurant";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/restaurant" element={<Restaurant></Restaurant>}></Route>
        <Route path="/meal/:strMeal" element={<MealDetail></MealDetail>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
