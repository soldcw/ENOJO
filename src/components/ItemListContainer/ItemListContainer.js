import React, { useState, useEffect } from 'react';
import 'bulma/css/bulma.css';
import { getProducts, getProductBycategory } from '../../AsyncMock';
import ItemList from '../ItemList/ItemList';

import { useParams } from 'react-router-dom';

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();



useEffect(() => {
    const asyncFunc = categoryId ? getProductBycategory : getProducts;
    console.log('categoryId:', categoryId);


    asyncFunc(categoryId)
        .then(response => {
            setProducts(response);
        })
        .catch(error => {
            console.error(error);
        });
}, [categoryId]);


  return (
    <div className="container">
      <h1 className="title">{greeting}</h1>
      <div className="columns">
        <div className='column'>
          <ItemList products={products} />
        </div>
      </div>
    </div>
  );
};

export default ItemListContainer;
