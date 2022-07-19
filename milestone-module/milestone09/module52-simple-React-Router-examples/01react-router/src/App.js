// import logo from './logo.svg';
import './App.css';
import About from './components/About/About';
import Friends from './components/Friends/Friends';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <Home></Home>
      <Friends></Friends>
      <About></About>
    </div>
  );
}

export default App;
