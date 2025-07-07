import {createContext, useContext, useState } from 'react';
const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addToCart = (pizza) => {
  setCart((prevCart) => {
    const existingPizza = prevCart.find((p) => p.id === pizza.id);

    if (existingPizza) {
      return prevCart.map((p) =>
        p.id === pizza.id ? { ...p, quantity: p.quantity + 1 } : p
      );
    } else {
      return [...prevCart, { ...pizza, quantity: 1 }];
    }
  });
};

const removeFromCart = (id) => {
  setCart((prevCart) => {
    const pizza = prevCart.find((p) => p.id === id);

    if (!pizza) return prevCart;

    if (pizza.quantity > 1) {
      return prevCart.map((p) =>
        p.id === id ? { ...p, quantity: p.quantity - 1 } : p
      );
    } else {
      return prevCart.filter((p) => p.id !== id);
    }
  });
};
  return (
    <CartContext.Provider value={{cart, addToCart, removeFromCart}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider