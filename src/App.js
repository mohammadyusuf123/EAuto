
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Allparts from './Components/Allparts/Allparts';
import Blog from './Components/Blog/Blog';
import CheckOut from './Components/CheckOut/CheckOut';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Navbar from './Components/Navbar/Navbar';
import NotFound from './Components/NotFound/NotFound';
import Profile from './Components/Profile/Profile';
import Register from './Components/Register/Register';
import RequireAuth from './Components/RequireAuth/RequireAuth';

function App() {
  return (
    <div >
      <Navbar></Navbar>
 <Routes>
   <Route path='/' element={<Home></Home>}></Route>
   <Route path='/parts' element={<Allparts></Allparts>}></Route>
   <Route path='/parts/:partsId' element={<RequireAuth>
     <CheckOut></CheckOut>
   </RequireAuth>}></Route>
   <Route path='/blog' element={<Blog></Blog>}></Route>
   <Route path='/login' element={<Login></Login>}></Route>
   <Route path='/register' element={<Register></Register>}></Route>
   <Route path='/profile' element={<Profile></Profile>}></Route>
   <Route path='/about' element={<About></About>}></Route>
   <Route path='*' element={<NotFound></NotFound>}></Route>
 </Routes>
 <Footer></Footer>
    </div>
  );
}

export default App;
