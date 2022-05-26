
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import About from './Components/About/About';
import AllOrders from './Components/AllOders/AllOrders';
import Allparts from './Components/Allparts/Allparts';
import AllUser from './Components/AllUser/AllUser';
import Blog from './Components/Blog/Blog';
import CheckOut from './Components/CheckOut/CheckOut';
import DashBoard from './Components/DashBoard/DashBoard';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Navbar from './Components/Navbar/Navbar';
import NotFound from './Components/NotFound/NotFound';
import Orders from './Components/Orders/Orders';
import Profile from './Components/Profile/Profile';
import Register from './Components/Register/Register';
import RequireAdmin from './Components/RequireAdmin/RequireAdmin';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import Review from './Components/Review/Review';

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
   <Route path='/orders' element={<RequireAuth>
     <Orders></Orders>
   </RequireAuth>}></Route>
   <Route path='/order' element={<RequireAuth>
    <AllOrders></AllOrders>
   </RequireAuth>}></Route>
   <Route path='dashboard' element={<RequireAuth>
    <DashBoard></DashBoard>
   </RequireAuth>}><Route index element={<AllOrders></AllOrders>}></Route>
                 <Route path='review' element={<Review></Review>}></Route>
                 <Route path='alluser' element={<RequireAdmin>
                   <AllUser></AllUser>
                 </RequireAdmin>}></Route>
   </Route>
   <Route path='/login' element={<Login></Login>}></Route>
   <Route path='/register' element={<Register></Register>}></Route>
   <Route path='/profile' element={<Profile></Profile>}></Route>
   <Route path='/about' element={<About></About>}></Route>
   <Route path='*' element={<NotFound></NotFound>}></Route>
 </Routes>
 <Footer></Footer>
 <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
