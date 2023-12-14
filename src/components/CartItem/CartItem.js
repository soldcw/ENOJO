
import React from 'react';

const CartItem = ({ id, name, price, cantidad }) => {
    return (
        <div className="CartItem">
            <h4>{name}</h4>
            <p>Precio: ${price}</p>
            <p>Cantidad: {cantidad}</p>
        </div>
    );
};

export default CartItem;
