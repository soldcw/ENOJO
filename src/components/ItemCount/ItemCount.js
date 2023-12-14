import { useState } from 'react';
import 'bulma/css/bulma.css';

const ItemCount = ({ stock, initial, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="box">
      <div className="field has-addons has-addons-centered">
        <p className="control">
          <button className="button" onClick={decrement}>
            -
          </button>
        </p>
        <p className="control">
          <input
            className="input has-text-centered"
            type="text"
            value={quantity}
            readOnly
          />
        </p>
        <p className="control">
          <button className="button" onClick={increment}>
            +
          </button>
        </p>
      </div>
      <div className="has-text-centered">
        <button
          className="button is-primary"
          onClick={() => onAdd(quantity)}
          disabled={!stock}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
