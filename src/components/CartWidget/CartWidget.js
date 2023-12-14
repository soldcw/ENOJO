import carrito from './assets/carrito.jpg';
import Cart from '../Cart/Cart'; 
import { useContext } from "react";
import { CartContext } from '../context/CartContext';
import { Link } from "react-router-dom";


const CartWidget = () => {
    const {totalQuantity} = useContext(CartContext)
    return(
        <Link to='/cart' className="CartWidget" style={{display: totalQuantity >0 ? 'block' : 'none'}}>
    <img className="CartImg" src= {Cart} alt='cart-widget'/>
    {totalQuantity}
    </Link>
    )
};
export default CartWidget; 