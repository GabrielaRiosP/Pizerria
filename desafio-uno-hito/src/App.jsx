import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './assets/components/Navbar';
import Home from './assets/pages/Home';
import Footer from './assets/components/Footer';
import Cart from './assets/pages/Cart';
import Login from './assets/pages/Login';
import Register from './assets/pages/Register';
import NotFound from './assets/pages/NotFound';
import Profile from './assets/components/Profile';

//import Pizza from './assets/pages/Pizza';

function App() {

  return (
    <><div>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/cart" element={<Cart/>}/>
      {/*<Route path="/pizza/p001" element={<Pizza/>}/>
      <Route path="/profile" element={<Profile/>}/>*/}
      

      <Route path="*" element={<NotFound/>}/>
      
      </Routes>
    </div>
    <Profile/>
    <Footer/>
    </>
  );
};


export default App