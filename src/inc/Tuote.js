import React from "react";

//Näyttää yhden tuotteen sivustolla
export default function Tuote({ url,product,addToCart }) {
  return (
    <div>
      {/* yksittäisen tuotteen näyttäminen / AK */}
      <p>{product?.name}</p>
      <div>
        <img src={url + "IMG/" + product?.image} alt="" />
      </div>
      {/* Tuotteen lisäys ostoskoriin-painike /AK */}
      <button class="btn-secondary" type="button" onClick={e => addToCart(product)}>
        Lisää <i className="bi bi-cart-fill mx-2"></i>
      </button>
    </div>
  );
}
