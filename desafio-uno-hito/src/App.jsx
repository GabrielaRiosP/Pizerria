import { useContext} from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { UserContext} from './context/userContext';
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

const App = () => {
  const { user } = useContext(UserContext);
  const token = !!user?.token;

  return (
    <>
    <div>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/register" element={ token ? <Navigate to= "/" /> : <Register />}/>
      <Route path="/login" element={token ? <Navigate to= "/" /> : <Login/>} />
      <Route path="/cart" element={<Cart/>}/>
      {/*<Route path="/pizza/p001" element={<Pizza/>}/>*/}
      <Route path="/profile" element={ token ? <Profile/> : <Navigate to="/login" />}/>
      

      <Route path="*" element={<NotFound/>}/>
      
      </Routes>
    </div>
    <Footer/>
    </>
  );
};


export default App