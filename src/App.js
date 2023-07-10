import './App.css';
import Nav_Bar from './Components/Nav_Bar';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Search from './Components/Search';
import Profile from './Components/Profile';
import Login from './Components/Login';
import { useSelector } from 'react-redux';
import Myprofile from './Components/Myprofile';

function App() {
  const Data = useSelector(state => state)
  console.log(Data);
  return (
    <div className="App h-screen">
      {
        Data.user  ? 
        <>
        <Nav_Bar/>
        <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/search' element={<Search/>} />
        <Route path='/profile/:id' element={<Profile/>} />
        <Route path='/profile' element={<Myprofile/>} />
       </Routes>
        </>
         :(<Login/>) 
      }
     {/* <Nav_Bar/> */}
     
    </div>
  );
}

export default App;
