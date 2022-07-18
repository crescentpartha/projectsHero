// import logo from './logo.svg';
import './App.css';
import MyLineChart from './components/MyLineChart/MyLineChart';
import SpecialChart from './components/SpecialChart/SpecialChart';
import { useSpring, animated } from 'react-spring';
import { useState } from 'react';

function App() {
  const [flip, set] = useState(false);

  const props = useSpring({ 
    to: { opacity: 1 }, 
    from: { opacity: 0 },
    reset: true,
    reverse: flip,
    delay: 200,
    onRest: () => set(!flip),
  })

  return (
    <div className="App">
      <animated.div className="text-6xl font-bold m-6" style={props}>I will fade in</animated.div>
      <MyLineChart></MyLineChart>
      <p><b>Fig:</b> Use rechart to draw line chart using React</p>
      <SpecialChart></SpecialChart>
      <p><b>Fig:</b> Use rechart to draw bar chart using React</p>
      <animated.div className="text-4xl font-bold m-6" style={props}>Crescent Partha</animated.div>
    </div>
  );
}

export default App;
