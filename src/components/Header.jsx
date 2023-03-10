import React from "react";
import carrito from "../image/carrito.png"

export const Header =() => {
return(  <>
<nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
  <img src={carrito} width="50" alt="carro de compras"  />
    <a class="navbar-brand" href="#">MyShop</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
       
        
        <li className="nav-item">
          <a  className="nav-link" >Registrarse</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <button className="btn btn-outline-success" type="submit">Carrito</button>
      </form>
    </div>
  </div>
</nav>
</>
)
}

export default Header
