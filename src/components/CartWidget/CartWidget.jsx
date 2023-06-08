import './CartWidget.css'
import imgCarrito from '../../assets/cart.png';
import ItemCount from '../ItemCount/ItemCount';
const CartWidget = () => {
    

  return (
    <div>
        <img className='imgCarrito' src={imgCarrito} alt="carritos de compras " />
        <strong>0</strong> 
        <ItemCount/>
    </div>
  )
}

export default CartWidget