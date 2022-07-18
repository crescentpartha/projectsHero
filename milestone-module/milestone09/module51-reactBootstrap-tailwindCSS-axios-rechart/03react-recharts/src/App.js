// import logo from './logo.svg';
import './App.css';
import MyLineChart from './components/MyLineChart/MyLineChart';
import SpecialChart from './components/SpecialChart/SpecialChart';

function App() {
  return (
    <div className="App">
      <MyLineChart></MyLineChart>
      <p><b>Fig:</b> Use rechart to draw line chart using React</p>
      <SpecialChart></SpecialChart>
      <p><b>Fig:</b> Use rechart to draw bar chart using React</p>
    </div>
  );
}

export default App;
