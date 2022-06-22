import React from "react";
import CartWidget from "../CartWitget";
import "./styles.css";  

const NavBar = () =>{
    return (
        <ul>
            <li><a className="active" href="#home">Inicio</a></li>
            <li><a href="#news">Productos</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#about">Nosotros</a></li>
            <CartWidget/>
        </ul>
        
    )
}
export default NavBar