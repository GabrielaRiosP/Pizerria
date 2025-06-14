
import '../css/Cardpizza.css'
import PropTypes from 'prop-types'

const Cardpizza = (props) => (
    
    <div className='containerCard col-4'>
        <div className='card'>
            <img src={props.pizzas.img} className="card-img-top" alt={props.pizzas.name}/>
            <div className='card-body'>
                <h3 className='card-title'>{props.pizzas.name}</h3>
                <ul> <p>Ingredientes</p>
                    {props.pizzas.ingredients.map((ingredients, index) => <li key={index}>🍕{ingredients}</li>)}
                </ul>
                <h5>Precio: ${props.pizzas.price}</h5>
                <div className='button-container'>
                    <button type="button" className="btn btn-dark">Ver más </button>
                    <button type="button" className="btn btn-dark">🛒Agregar</button>

                </div>

            </div>

        </div>

    </div>
    );
    
Cardpizza.propTypes = {
  pizzas: PropTypes.shape({
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default Cardpizza 