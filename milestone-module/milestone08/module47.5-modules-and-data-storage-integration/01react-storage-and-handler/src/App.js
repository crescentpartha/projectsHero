import logo from './logo.svg';
import './App.css';
import Cosmetics from './components/Cosmetics/Cosmetics';
import Shoes from './components/Shoes/Shoes';

function App() {
  return (
    <div className="App">
      <Cosmetics></Cosmetics>
      <img src={logo} className="App-logo" alt="logo" />
      <Shoes></Shoes>
    </div>
  );
}

export default App;
