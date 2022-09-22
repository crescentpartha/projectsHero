import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import AddProducts from './components/AddProducts/AddProducts';
import UpdateProducts from './components/UpdateProducts/UpdateProducts';
import ManageProducts from './components/ManageProducts/ManageProducts';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/addProducts' element={<AddProducts></AddProducts>}></Route>
        <Route path='/updateProducts' element={<UpdateProducts></UpdateProducts>}></Route>
        <Route path='/manageProducts' element={<ManageProducts></ManageProducts>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;