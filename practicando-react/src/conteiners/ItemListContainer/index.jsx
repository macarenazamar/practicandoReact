import React from 'react'
import { useState } from 'react'

const ItemListContainer = ({greeting}) => {

  const [color, setColor] = useState ("blue");
  
  const cambiarColor = () => {
    if (color === "blue") setColor ("red")
    else setColor("blue")
  }
  
  
  const [cont, setCont] = useState (0);
  
  const handleClick = () => {
    setCont(cont + 1);
  }
  
  const fecha = new Date().toLocaleString();
  
  return (
    <div>
      <div style={{backgroundColor:color}}>
        <p>{color}</p>
        <button onClick={cambiarColor}>
          Cambiar el color
        </button>

      </div>
        <p>{greeting}</p>
        <div style={{backgroundColor:'white'}}>
          <p> Fecha y Hora de los click: {fecha}</p>
          <h1>
          Conteo de click: {cont}
          </h1>
          <button onClick={handleClick}>
          Contamos los click
          </button>
        </div>
    </div>
    
  )
}

export default ItemListContainer