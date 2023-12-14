import React, { useState } from "react";
import "bulma/css/bulma.css";
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import { getProductBycategory } from '../../AsyncMock';

const NavBar = ({ setFilteredProducts }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleOnClick = (category) => {
    setSelectedCategory(category);
    setFilteredProducts(category);
  }

  return (
    <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item has-text-white">
          ECOMMERCE
        </Link>
      </div>
      <div className="navbar-menu">
        <div className="navbar-start">
          <Link
            to="/category/pantalones"
            className={`navbar-item has-text-white has-background-primary ${
              selectedCategory === 'pantalones' ? 'has-text-weight-bold' : ''
            }`}
            onClick={() => handleOnClick('pantalones')}
          >
            Pantalones
          </Link>
          <Link
            to="/category/polleras"
            className={`navbar-item has-text-white has-background-primary ${
              selectedCategory === 'polleras' ? 'has-text-weight-bold' : ''
            }`}
            onClick={() => handleOnClick('polleras')}
          >
            Polleras
          </Link>
          <Link
            to="/category/remeras"
            className={`navbar-item has-text-white has-background-primary ${
              selectedCategory === 'polleras' ? 'has-text-weight-bold' : ''
            }`}
            onClick={() => handleOnClick('remeras')}
          >
            Remeras
          </Link>
        </div>
        <div className="navbar-end">
          <button className="navbar-item has-text-primary has-background-white" onClick={handleOnClick}>
            Comprar
            <CartWidget className="is-64x64" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
