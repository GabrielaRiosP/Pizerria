
import './App.css'
import Navbar from './assets/components/Navbar'
//import Home from './assets/components/Home'
import Footer from './assets/components/Footer'
import Pizza from './assets/components/Pizza'
//import Cart from './assets/components/Cart'

//import Login from './assets/components/Login'
//import Register from './assets/components/Register'*/ }

function App() {

  return (
    <>
    <Navbar/>
    {/*<Home/>
    <Register/>
    <Cart/>
    <Login/>*/}
    <div className='container'>
    <Pizza />
    </div>
    <Footer/>
    </>
  )
 }

export default App
