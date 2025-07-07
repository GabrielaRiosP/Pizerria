import '../css/Navbar.css';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

const Navbar = () => {
  const { cart} = useCart();

  const total = cart.reduce((sum, item) => sum + (item.price ?? 0) * (item.quantity ?? 0), 0);

  return (
    <div className="menu">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">Pizzería Mamma Mía!</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <div className="justify-content-start">
        <Link to="/" className="text-white me-3 text-decoration-none">
        Home
        </Link>
        <Link to="/register" className="text-white me-3 text-decoration-none">
        Register</Link>
        <Link to="/login" className="text-white me-3 text-decoration-none">
        Login</Link>
        <Link to="/cart" className="text-white me-3 text-decoration-none">
        Carta</Link>
        {/*<Link to="/pizza/p001" className="text-white ms-3 text-decoration-none">
        Pizza</Link>
        <Link to="/profile" className="text-white ms-3 text-decoration-none">
        Profile</Link>*/}
        <Link to="/404" className="text-white ms-3 text-decoration-none">
        NotFound</Link>
      </div>

            <ul className="navbar-nav">
              <li className="nav-item-total">
                <Link to="/cart" className='btn btn-dark btn-outline-light'>🛒 Total: ${total.toLocaleString('es-CL')}</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;