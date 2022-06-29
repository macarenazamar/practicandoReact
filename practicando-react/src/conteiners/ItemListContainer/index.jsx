import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const ItemListContainer = ({greeting}) => {
  
  const [color, setColor] = useState ("blue");
  
  const cambiarColor = () => {
    if (color === "blue") setColor ("red")
    else setColor("blue")
  }
  
  
  const [cont, setCont] = useState (0);
  
  //agregamos un stock
  const stock = 10;
  
  const handleClick = () => {
    //agragamos un stock
    if (cont < stock) {
      setCont(cont + 1);
    } else {
      alert("No hay mas stock")
    }
  }
  
  const fecha = new Date().toLocaleString();
  
//Ciclos de vida
//Montaje:
useEffect(() =>{
  console.log("Se montó/actualizó el componente")
  }, [color])

useEffect(() =>{
  //Se desmonta el componente
  return () => {
    console.log("Se está desmontando el ItemListContaier")
  }
}, [])

useEffect(() =>{
  console.log("Se ejecuta siempre que se actualice cualquier estado")
})

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