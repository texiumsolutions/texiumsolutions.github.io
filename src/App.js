import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Navbar from './Home/Navbar/Navbar';
import Login from './Home/Navbar/Login';
import Signup from './Home/Navbar/Signup';
// import Footer from './Home/Footer';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
      </Routes>
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
