import { useEffect, useState } from "react";

const Pizza = () => {
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    getApi();
  }, []);

  const getApi = async () => {
    const response = await fetch("http://localhost:5000/api/pizzas");
    const data = await response.json();
    setPizza(data[0]);
  };

  if (!pizza) return <p>Cargando pizza...</p>;

  return (
    <div className="row">
      <div className="card col-4 m-3 p-0" key={pizza.id}>
        <img
          src={pizza.img || "https://via.placeholder.com/300"}
          className="card-img-top"
          alt={pizza.name}
        />
        <div className="card-body">
          <h3 className="card-title">{pizza.name}</h3>
          {pizza.desc && <p className="card-text">{pizza.desc}</p>}
          <ul>
            <li><strong>Ingredientes:</strong></li>
            {pizza.ingredients?.map((ing, i) => (
              <li key={i}>🍕 {ing}</li>
            ))}
          </ul>
          
          <h5><strong>Precio:</strong> ${pizza.price?.toLocaleString("es-CL")}</h5>
          <div className="d-flex justify-content-between mt-3">
            <button className="btn btn-outline-primary">Ver más</button>
            <button className="btn btn-dark">🛒 Agregar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pizza;