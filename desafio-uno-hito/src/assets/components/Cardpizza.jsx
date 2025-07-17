
import '../css/Cardpizza.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

const Cardpizza = ({ pizzas }) => {
    const { addToCart } = useCart();
    if (!Array.isArray(pizzas)) return <>No hay pizzas aún</>
    console.log("Se reciben las pizzas", pizzas);

    return (
        <div className='row'>
            {pizzas.map((pizza)=> (
                <div className='card col-4' key={pizza.id}>
                    <img src={pizza.img} className="card-img-top" alt={pizza.name}/>
                    <div className='card-body'>
                <h3 className='card-title'>{pizza.name}</h3>
                <ul> <li><strong>Ingredientes</strong></li>
                    {pizza.ingredients.map((ingredient, index) => ( <li key={index}>🍕{ingredient}</li>))}
                </ul>
                <h5>Precio: ${pizza.price?.toLocaleString("es-CL")}</h5>
                <div className='d-flex justify-content-between mt-3'>
                    <Link to={'/pizza/${pizza.id}'} className='btn btn-outline-dark'>
                    Ver mas
                    </Link>
                    <button type="button" className="btn btn-dark" onClick={() => addToCart(pizza)}>🛒Agregar</button>

                </div>
                
            </div>
        </div>
            )) }
            </div>
            );
        }
    
    
Cardpizza.propTypes = {
  pizzas: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
      price: PropTypes.number.isRequired
    })
  ).isRequired
};

export default Cardpizza 