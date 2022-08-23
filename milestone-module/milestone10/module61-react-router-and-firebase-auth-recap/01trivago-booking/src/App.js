import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import NotFound from './components/Shared/NotFound/NotFound';
import Header from './components/Shared/Header/Header';
import Footer from './components/Shared/Footer/Footer';
import Stays from './components/Stays/Stays/Stays';
import Cars from './components/Cars/Cars/Cars';
import About from './components/SinglePage/About/About';
import Login from './components/SinglePage/Login/Login';
import SignUp from './components/SinglePage/SignUp/SignUp';
import CarDetail from './components/DynamicRoute/CarDetail/CarDetail';
import SingleBedDetail from './components/DynamicRoute/SingleBedDetail/SingleBedDetail';
import DoubleBedDetail from './components/DynamicRoute/DoubleBedDetail/DoubleBedDetail';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/stays' element={<Stays></Stays>}></Route>
        <Route path='/cars' element={<Cars></Cars>}></Route>
        <Route path='/carDetail/:carDetailId' element={<CarDetail></CarDetail>}></Route>
        <Route path='/singleBedDetail/:singleBedDetailId' element={<SingleBedDetail></SingleBedDetail>}></Route>
        <Route path='/doubleBedDetail/:doubleBedDetailId' element={<DoubleBedDetail></DoubleBedDetail>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/notFound' element={<NotFound></NotFound>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
