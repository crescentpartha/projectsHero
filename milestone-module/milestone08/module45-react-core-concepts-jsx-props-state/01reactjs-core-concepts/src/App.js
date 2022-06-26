import logo from './logo.svg';
import './App.css';

/* Basic Information of React:

    # Comments could be done by 3 ways.
        1. Single line comment.
        2. Multi line comment.
        3. JSX comment / react comment.

    # We could use template string without $ sign like: <p>Name: {singer.name}</p>

    # We could Add style in 3 ways:
        1. Writing style in App.css file similer to CSS style: .container { color: 'blue', backgroundColor: 'golderrod'}
        1. creating an object of style properties, then use: <p style={singerStyle}> Name: </p>
        2. Style use directly: <p style={{color: 'blue', borderRadius: '10px'}}>Name:</p>

    # function is nothing but a component Or HTML tag | Used like a tag anywhere: <person></person>
    # function return only one things, not more than one.
    # We could return in 3 ways:
        1. return <h1>Sakib Al Hasan</h1>
        2. 
            <div>
              <h1>Sakib Al Hasan</h1>
              <p>Profession: Cricket</p>
            </div>
        3. 
            <>
              <h1>Sakib Al Hasan</h1>
              <p>Profession: Cricket</p>
            </> 
        4. // best way
            return (
              <div>
                <h1>Sakib Al Hasan</h1>
                <p>Profession: Cricket</p>
              </div>
            )

    # Component (function)
        - Component Name write with Capital letter because of differentiating normal HTML tag vs User defined tag. 
        - similer in look, different in data.
        - create one component, and use as much as you can.
*/

const number = 55555;
const singer = {name: 'Dr. Mahfuz', job: 'Singer'};
const singer2 = {name: 'Eva Rahman', job: 'Singer2'};

const singerStyle = {
  color: 'purple', 
  backgroundColor: 'white', 
  padding: '10px', 
  borderRadius: '10px'
}

function App() {
  return (
    <div className="App">
      <Person></Person>
      <h5>Component: Similer in Look, Different in Data.</h5>
      <Friend></Friend>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>JSX</h1>
        <div className="container">
          <h3>Hello dude React. How are you?</h3>
        </div>
        <div className="music">
          <p>Name: {22222 + number}</p>
          <p style={singerStyle}>Name: {singer.name} {singer.job}</p>
          <p style={{color: 'blue', backgroundColor: 'yellow', padding: '10px', borderRadius: '10px'}}>Name: {singer2.name} {singer2.job}</p>
        </div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>

      <Person></Person>
      <Person></Person>
      <h5>Component: Similer in Look, Different in Data.</h5>
      <Friend></Friend>
      <Friend></Friend>
    </div>
  );
}

// This function is nothing but a component.
function Person() {
  return (
    <div className="person">
      <h1>Sakib Al Hasan</h1>
      <p>Profession: Cricket</p>
    </div>
  )
}

function Friend() {
  return (
    <div className="container">
      <h3>Name: Ajay Devgun</h3>
      <p>Job: Maramari</p>
    </div>
  )
}

export default App;
