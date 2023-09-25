import { useState } from "react";
import foodList from "./data/food";

export const CalculadoraPropinaApp = () => {
  const [precio, setPrecio] = useState(0);
  const [propina, setPropina] = useState(0);
  const [total, setTotal] = useState(0);

  const handleChange = (e) => {
    e.preventDefault();
    const precio = e.target.value;
    setPrecio(precio);
  };
  const handleRadioChange = (e) => {
    e.preventDefault();
    const propina = e.target.value;
    setPropina(propina);
  };

  const calcularPropina = (e) => {
    e.preventDefault();
    const prop = precio * (propina / 100);
    const tot = Number(precio) + Number(prop)
    setTotal(tot);
  };

  return (
    <>
      <h1 className="mb-5 text-center">Caluladora de propina</h1>
      <h5 className="text-center mb-3">Elije tu comida</h5>
      <select 
        onChange={handleChange}
        className="form-select form-select-lg mb-3"
        >
        {foodList.map((food) => (
          <option key={food.id} value={food.price}>
            {food.name} - ${food.price}
          </option>
        ))}
      </select>
      <h5>Elija la propina</h5>
      <form>
        {[10, 20, 30].map((num) => (
          <div 
          key={num}
          className="form-check my-2"
          >
            <input
              value={num}
              type="radio"
              name="porcentaje"
              onChange={handleRadioChange}
              className="form-check-input"
            />
            <label>{num}</label>
          </div>
        ))}

        <button 
            onClick={calcularPropina}
            className="btn btn-primary my-3"
        >
            Calcular Precio Final
        </button>
      </form>
      <h2 className="mt-2">El valor total de la Factura es: ${total}</h2>
    </>
  );
};
