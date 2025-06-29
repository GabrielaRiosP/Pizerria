
import '../css/Cardpizza.css'
import PropTypes from 'prop-types'

const Cardpizza = ({ pizzas }) => {
    if (!pizzas || pizzas.length === 0) return <>No hay pizzas aún</>
    console.log("Se reciben las pizzas", pizzas);

    return (
        <div className='row'>
            {pizzas.map((pizza, index) => (
                <div className='card col-4' key={index}>
                    <img src={pizza.img} className="card-img-top" alt={pizza.name}/>
                    <div className='card-body'>
                <h3 className='card-title'>{pizza.name}</h3>
                <ul> <li><strong>Ingredientes</strong></li>
                    {pizza.ingredients.map((ingredients, index) => ( <li key={index}>🍕{ingredients}</li>))}
                </ul>
                <h5>Precio: ${pizza.price}</h5>
                <div className='button-container'>
                    <button type="button" className="btn btn-dark">Ver más </button>
                    <button type="button" className="btn btn-dark">🛒Agregar</button>
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