//import { pizzaCart } from "../../data/pizzas.js";
//import { useState } from "react";
import { useCart } from "../../context/CartContext";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import "../css/Cart.css";


const Cart = () => {
  const {cart, addToCart, removeFromCart, } = useCart();
  const { token } = useContext(UserContext);

  const total = cart.reduce (
    (acum, pizza)=> acum + (pizza.price ?? 0) * (pizza.quantity ?? 0) , 0
  );

  const pagar = () => {
    alert("Gracias por tu compra 😄");
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

            <div className="item-price">${pizza.price.toLocaleString('es-CL')}</div>

            <div className="counter">
              <button
                className="decrease btn btn-outline-danger"
                onClick={() => removeFromCart(pizza.id)}
              >
                −
              </button>
              <span> {pizza.quantity} </span>
              <button
                className="increase btn btn-outline-primary"
                onClick={() => addToCart(pizza)}
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
            Total: <span>${total.toLocaleString('es-CL')}</span>
          </div>

          <button className="btn-pay btn-sm" onClick={pagar} disabled={!token}>
            Pagar
          </button>
          {!token && (
            <p className="text-danger mt-2">
              Iniciia sesión para continuar con el pago 🔒
            </p>
          )}
        </>
      )}
    </div>
  );
};

export default Cart;




  {/*const aumentarCantidad = (id) => {
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
  ); */}

  

 