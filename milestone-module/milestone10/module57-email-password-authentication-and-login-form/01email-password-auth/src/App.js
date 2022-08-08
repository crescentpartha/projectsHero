// import logo from './logo.svg';
import './App.css';
import { getAuth } from "firebase/auth";
import app from './firebase.init';

const auth = getAuth(app);

function App() {

  const handleEmailBlur = event => {
    console.log(event.target.value);
  }

  const handlePasswordBlur = event => {
    console.log(event.target.value);
  }

  const handleFormSubmit = event => {
    console.log('form submitted');
    event.preventDefault(); // to prevent reload;
  }

  return (
    <div className="App">
      <form onSubmit={handleFormSubmit}>
        {/* <input onChange={handleEmailChange} type="email" name="" id="" />
        <input onChange={handlePasswordChange} type="password" name="" id="" /> */}

        <input onBlur={handleEmailBlur} type="email" name="" id="" />
        <br />
        <input onBlur={handlePasswordBlur} type="password" name="" id="" />
        <br />
        <input type="submit" value="LogIn" />
      </form>
    </div>
  );
}

export default App;
