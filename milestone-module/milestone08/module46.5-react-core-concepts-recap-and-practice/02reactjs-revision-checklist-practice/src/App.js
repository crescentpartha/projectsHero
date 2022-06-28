import logo from './logo.svg';
import './App.css';
import Mobile from './components/Mobile/Mobile';
import ToDo from './components/ToDo/ToDo';

const articleStyle = {
  color: 'darkBlue',
  fontSize: 'xx-large',
  textAlign: 'center',
  textTransform: 'capitalize', 
  textShadow: '2px 2px 2px gray'
}

function App() {
  return (
    <div className="App">
      <Mobile></Mobile>

      <div className='containers'>
        <article className="blog">
          <h2 style={articleStyle}>Create React App</h2>
          <p style={{textAlign: 'justify', fontWeight: '500'}}>Create React App is a comfortable environment for learning React, and is the best way to start building a new single-page application in React.
            It sets up your development environment so that you can use the latest JavaScript features, provides a nice developer experience, 
            and optimizes your app for production.</p>
        </article>
        <Blog 
        heading="Components and Props" 
        author="Andrew Clark" 
        content="Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen."
        ></Blog>
        <Blog 
        heading="Handling Events" 
        author="Rick Hanlon" 
        content="Handling events with React elements is very similar to handling events on DOM elements. There are some syntax differences: React events are named using camelCase, rather than lowercase. And With JSX you pass a function as the event handler, rather than a string."
        ></Blog>
        <Blog 
        heading="Thinking in React" 
        author="Luna Ruan" 
        content="One of the many great parts of React is how it makes you think about apps as you build them. In this document, we’ll walk you through the thought process of building a searchable product data table using React."
        ></Blog>
      </div>

      <img src={logo} className="App-logo" alt="logo" />

      <ToDo></ToDo>
    </div>
  );
}

function Blog(props) {
  return (
    <div className="blogs">
      <h2>{props.heading}</h2>
      <h5>Author: {props.author}</h5>
      <p>{props.content}</p>
    </div>
  )
}

export default App;
