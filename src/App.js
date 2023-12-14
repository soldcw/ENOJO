// import React, { useState } from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Navbar from './components/NavBar/NavBar';
// import ItemListContainer from './components/ItemListContainer/ItemListContainer';
// import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
// import Cart from './components/Cart/Cart';

// import { CartProvider } from './components/context/CartContext';

// function App() {
//   const [productosFiltrados, setProductosFiltrados] = useState([]);
  
//   return (
//     <div className="App">
//       <BrowserRouter>
//       <CartProvider>
//         <Navbar setFilteredProducts={setProductosFiltrados} />
//         <Routes>
//           <Route path="/" element={<ItemListContainer />} />
//           <Route path="/category/:categoryId" element={<ItemListContainer />} />
//           <Route path="/item/:itemId" element={<ItemDetailContainer />} />
//           <Route path='/cart' element={<Cart />} /> 
//           <Route path="*" element={<h1>404 NOT FOUND</h1>} />
//         </Routes>
//         </CartProvider>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';

import { CartProvider } from './components/context/CartContext';

function App() {
  const [productosFiltrados, setProductosFiltrados] = useState([]);
  
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <Navbar setFilteredProducts={setProductosFiltrados} />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:categoryId" element={<ItemListContainer />} />
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} /> 
            <Route path="*" element={<h1>404 NOT FOUND</h1>} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
