// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import OrderReview from './components/OrderReview/OrderReview';
import Grandpa from './components/Grandpa/Grandpa';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/orderReview' element={<OrderReview></OrderReview>}></Route>
        <Route path='/grandpa' element={<Grandpa></Grandpa>}></Route>
        <Route path='/notFound' element={<NotFound></NotFound>}></Route>
        <Route path='/*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
