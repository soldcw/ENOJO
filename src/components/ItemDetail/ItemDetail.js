import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
  const [quantityAdded, setQuantityAdded] = React.useState(0);
  const { addItem } = useContext(CartContext);
  const navigate = useNavigate();

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);

    const item = {
      id, name, price,
    };

    addItem(item, quantity);
    navigate('/cart');
  }

  return (
    <article className='CardItem'>
      <header className='Header'>
        <h2 className='ItemHeader'>
          {name}
        </h2>
      </header>
      <picture>
        <img src={img} alt={name} className='ItemImg' />
      </picture>
      <section>
        <p className='Info'>
          Categoria: {category}
        </p>
        <p className='Info'>
          Descripcion: {description}
        </p>
        {price !== null && price !== undefined && (
          <p className='Info'>
            Precio: ${price}
          </p>
        )}
        {stock !== null && stock !== undefined && (
          <p className='Info'>
            Stock: {stock}
          </p>
        )}
      </section>

      <footer className='ItemFooter'>
        {quantityAdded > 0 ? (
          <Link to='/cart' className='Option'>Terminar Compra</Link>
        ) : (
          <ItemCount initial={1} stock={stock} onAdd={(quantity) => handleOnAdd(quantity)} />
        )}
      </footer>

    </article>
  );
};

export default ItemDetail;
