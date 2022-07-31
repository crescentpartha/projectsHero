// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';
import Repositories from './components/Repositories/Repositories';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}>
          <Route path='/home/' element={<Repositories></Repositories>}></Route>
          <Route path='repositories' element={<Repositories></Repositories>}></Route>
          <Route path='notFound' element={<NotFound></NotFound>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Route>
        <Route path='/notFound' element={<NotFound></NotFound>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
