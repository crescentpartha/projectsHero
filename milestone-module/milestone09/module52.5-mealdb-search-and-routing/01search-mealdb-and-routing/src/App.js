// import logo from './logo.svg';
import {Routes, Route } from "react-router-dom";
import './App.css';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <h1>Welcome to search mealDb with Router!</h1>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
