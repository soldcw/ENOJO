
import React from 'react';
import 'bulma/css/bulma.css';
import {Link} from 'react-router-dom'

const Item = ({ id, name, img, price, stock }) => {
  return (
    <article className="card">
      <div className="card-header">
        <h2 className="card-header-title">{name}</h2>
      </div>
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={img} alt={name} className="item-image" />
        </figure>
      </div>
      <div className="card-content">
        <p className="content">
          <strong>Precio:</strong> ${price}
        </p>
        <p className="content">
          <strong>Stock:</strong> {stock}
        </p>
      </div>
      <div className="card-footer">
        <button>
          <Link to={`/Item/${id}`} className="Option"> Ver detalle </Link>
        </button>
      </div>
    </article>
  );
};



export default Item;
