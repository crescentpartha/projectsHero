import logo from './logo.svg';
import './App.css';

/* 
  Js Vs React:
    - class="container" --> className="container"
    - onclick()="Increment" --> onClick()="Increment"
  
  React.Fragment vs div:
    - Fragment will not add any additional elements into the DOM tree, whereas, using a div will add a div to the DOM tree.
    - Ex: 
          return (                return ( 
            <div>                   <React.Fragment>
              <p>Hello</p>            <p>Hello</p> 
              <p>World</p>            <p>World</p>
            </div>                  </React.Fragment>
          );                      );
  
  We could Add style in 3 ways:
        1. Writing style in App.css file similar to CSS style: .container { color: 'blue', backgroundColor: 'goldenrod'}
        1. creating an object of style properties, then use: <p style={singerStyle}> Name: </p>
        2. Style use directly: <p style={{color: 'blue', borderRadius: '10px'}}>Name:</p>

  3 steps to complete data passing:
   - send as a attribute
   - receive as a props
   - show dynamically --> <h2>{props.name}</h2>
      
  Basic Information:
    - Component name should be meaningful & Uppercase
    - 

*/

function App() {
  return (
    <div className="App">
      <District name="Jessore" specialty="1st digital district in Bangladesh"></District>
      <District name="Brahmanbaria" specialty="Jodha Akbar"></District>
      <District name="Noakhali" specialty="Noakhali bivag chai"></District>
    </div>
  );
}

const districtStyle = {
  backgroundColor: 'lightGoldenRodYellow', 
  margin: '20px'
}

function District(props) {
  return (
    <div className="district" style={districtStyle}>
      <h2>Name: {props.name}</h2>
      <p style={{fontWeight: 'bold'}}>Specialty: {props.specialty}</p>
    </div>
  )
}

export default App;
