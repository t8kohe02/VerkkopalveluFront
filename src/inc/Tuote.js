import './Tuote.css'
import React from "react";

//Näyttää yhden tuotteen sivustolla
export default function Tuote({ url,product,addToCart }) {
  return (
    <div id="tuote" className="container justify-content-center">
      <div className="row justify-content-center">
        <div className="col-6">
          {/* yksittäisen tuotteen näyttäminen / AK */}
          <h5>{product?.name}</h5>
          <div>
            <img src={url + "IMG/" + product?.image} alt="" />
          </div>
          {/* Tuotteen lisäys ostoskoriin-painike /AK */}
          <p>{product?.price} €</p>
        </div>
      </div>
      <button className="btn-light" type="button" onClick={e => addToCart(product)}>
        Lisää <i className="bi bi-cart-fill mx-2"></i>
      </button>
    </div>
  );
}
