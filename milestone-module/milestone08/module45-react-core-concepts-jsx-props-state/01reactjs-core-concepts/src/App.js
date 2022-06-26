import logo from './logo.svg';
import './App.css';

/* Basic Information of React:

    (45.2) JSX, Dynamic content, Dynamic Style in React
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

    (45.3) Create Component, return HTML from a component
    # Component (function)
        - Component Name write with Capital letter because of differentiating normal HTML tag vs User defined tag. 
        - similer in look, different in data. (by using props)
        - create one component, and use as much as you can.
    
    (45.4) Pass dynamic data to components by props in react 
        - We can set props (properties) in a component, similer like HTML attributes.
        - User defind props like: name="partha" | Avoid to use common name like: (id, class, title, onClick(), href, src)
        - 
*/

const number = 55555;
const singer = { name: 'Dr. Mahfuz', job: 'Singer' };
const singer2 = { name: 'Eva Rahman', job: 'Singer2' };

const singerStyle = {
  color: 'purple',
  backgroundColor: 'white',
  padding: '10px',
  borderRadius: '10px'
}

function App() {
  return (
    <div className="App">
      <Person name='Crescent Partha' profession='Engineering' favorite='Competitive Programming'></Person>
      <h5>Component: Similer in Look, Different in Data by using props</h5>
      <Friend name="Amir Khan" job="Acting" movie="3 Idiot" phone="017965923**"></Friend>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>JSX</h1>
        <div className="container">
          <h3>Hello dude React. How are you?</h3>
        </div>
        <div className="music">
          <p>Name: {22222 + number}</p>
          <p style={singerStyle}>Name: {singer.name} {singer.job}</p>
          <p style={{ color: 'blue', backgroundColor: 'yellow', padding: '10px', borderRadius: '10px' }}>Name: {singer2.name} {singer2.job}</p>
        </div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>

      <Person name="Crescent" profession="Web Development" nayok="Hrithik Roshan" favorite="Coding"></Person>
      <Person name="Kopila" profession="Love Scientist" nayok="Kuber" favorite="Kuber Majhi"></Person>
      <h5 id="totocompany">Rock Mama - React Mama</h5>
      <Friend name="Ajay Devgun" job="Maramari" movie="Singgam" phone="017992923**"></Friend>
      <Friend name="Hrithik Roshan" job="Actor" phone="017171719**" movie="Krrish"></Friend>
    </div>
  );
}

// This function is nothing but a component.
function Person(props) {
  console.log(props);
  return (
    <div className="person">
      {/* <h1>Sakib Al Hasan</h1> */}
      <h1>Name: {props.name}</h1>
      <p>Profession: {props.profession}</p>
      <p>Favorite: {props.favorite}</p>
    </div>
  )
}

function Friend(props) {
  console.log(props);
  return (
    <div className="container">
      <h3>Name: {props.name}</h3>
      <p>Job: {props.job}</p>
      <p>Movie: {props.movie}</p>
      <p>Phone: {props.phone}</p>
    </div>
  )
}

export default App;
