import { useEffect, useState } from "react";


const Pizza = () => {
    const [pizza, setPizza] = useState(null);

    useEffect(() => {
        getApi();
    }, [])

    const getApi = async () => {
        const response = await fetch ('http://localhost:5000/api/pizzas');
        const data = await response.json();
        setPizza(data[0])
        console.log(data)
    }

  return (
    <div className="row">
      {pizza && (
        <div className="card col-4 m-3 p-0" key={pizza.id}>
          <img src={pizza.img} className="card-img-top" alt={pizza.nombre} />
          <div className="card-body">
            <h3 className="card-title">{pizza.nombre}</h3>
            {pizza.descripcion && <p className="card-text">{pizza.descripcion}</p>}
            <ul>
              <li><strong>Ingredientes:</strong></li>
              {pizza.ingredientes?.map((ing, i) => (
                <li key={i}>🍕 {ing}</li>
              ))}
            </ul>
            <p><strong>ID:</strong> {pizza.id}</p>
            <h5><strong>Precio:</strong> ${pizza.precio}</h5>
            <div className="d-flex justify-content-between mt-3">
              <button className="btn btn-outline-primary">Ver más</button>
              <button className="btn btn-dark">🛒 Agregar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );


};

export default Pizza