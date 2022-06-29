import logo from './logo.svg';
import './App.css';
import Device from './components/Device/Device';
import Watch from './components/Watch/Watch';

/* 
  React: Unidirectional Data Flows: (One way Binding)
    - Parent → Child (ex: App → Device → DeviceDetail)
  Angular Framework (Two way Binding)
    - Parent ↔ Child

  -----------------------------------------------------------------------

  props read only
    - Cannot assign any value (ex: props.price = 150000) | makes error
    - you can change value only from the root (from where you send)

*/

function App() {
  return (
    <div className="App">
      <Device name="IPhone" price="130000"></Device>
      <Watch></Watch>
    </div>
  );
}

export default App;
