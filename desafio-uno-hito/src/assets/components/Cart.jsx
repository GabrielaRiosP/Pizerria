import { pizzaCart } from "../../data/pizzas";
import { useState } from "react";
import "./Cart.css";

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart);

  const aumentarCantidad = (id) => {
    const actualizado = cart.map((pizza) =>
      pizza.id === id ? { ...pizza, count: pizza.count + 1 } : pizza
    );
    setCart(actualizado);
  };

  const disminuirCantidad = (id) => {
    const actualizado = cart
      .map((pizza) =>
        pizza.id === id ? { ...pizza, count: pizza.count - 1 } : pizza
      )
      .filter((pizza) => pizza.count > 0); // eliminar si llega a 0
    setCart(actualizado);
  };

  const total = cart.reduce(
    (acum, pizza) => acum + pizza.price * pizza.count,
    0
  );

  const pagar = () => {
    alert("Gracias por tu compra 😄");
    setCart([]);
  };

  return (
    <div className="cart-container row">
      <h4>🧾 Detalles del pedido:</h4>

      {cart.length === 0 ? (
        <p>No hay pizzas en el carrito.</p>
      ) : (
        cart.map((pizza) => (
          <div key={pizza.id} className="cart-item">
            <div className="item-name">
              <img src={pizza.img} alt= {pizza.name} />
              {pizza.name.charAt(0).toUpperCase() + pizza.name.slice(1)}
            </div>

            <div className="item-price">${pizza.price.toLocaleString()}</div>

            <div className="counter">
              <button
                className="decrease btn btn-outline-danger"
                onClick={() => disminuirCantidad(pizza.id)}
              >
                −
              </button>
              <span> {pizza.count} </span>
              <button
                className="increase btn btn-outline-primary"
                onClick={() => aumentarCantidad(pizza.id)}
              >
                +
              </button>
            </div>
          </div>
        ))
      )}

      {cart.length > 0 && (
        <>
          <div className="total-section">
            Total: <span>${total.toLocaleString()}</span>
          </div>
          <button className="btn-pay btn-sm" onClick={pagar}>
            Pagar
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
