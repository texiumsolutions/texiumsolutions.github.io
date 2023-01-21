import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Login from './Home/Navbar/Login';
import Signup from './Home/Navbar/Signup';
import Dashboard from './Shared/Dashboard/Dashboard';
import InternalDB from './Shared/Dashboard/Into Dashboard/InternalDB';
import Search from './Shared/Dashboard/Into Dashboard/Into InternalDb/Search';
import Exclude from './Shared/Dashboard/Into Dashboard/Into InternalDb/Exclude';
import CareerBuilder from './Shared/Dashboard/Into Dashboard/CareerBuilder';
import MOnster from './Shared/Dashboard/Into Dashboard/MOnster';
import Dice from './Shared/Dashboard/Into Dashboard/Dice';
import IntegratedS from './Shared/Dashboard/Into Dashboard/IntegratedS';
import DashboardHome from './Shared/Dashboard/Into Dashboard/DashboardHome';
import DashMenu from './Shared/Dashboard/Into Dashboard/DashMenu';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/internalDb' element={<InternalDB></InternalDB>}></Route>
        <Route path='/src' element={<Search></Search>}></Route>
        <Route path='/exc' element={<Exclude></Exclude>}></Route>
        <Route path='/career' element={<CareerBuilder></CareerBuilder>}></Route>
        <Route path='/monster' element={<MOnster></MOnster>}></Route>
        <Route path='/dice' element={<Dice></Dice>}></Route>
        <Route path='/ints' element={<IntegratedS></IntegratedS>}></Route>
        <Route path='/dashhome' element={<DashboardHome></DashboardHome>}></Route>
        <Route path='/dashmenu' element={<DashMenu></DashMenu>}></Route>
      </Routes>
    </div>
  );
}

export default App;
