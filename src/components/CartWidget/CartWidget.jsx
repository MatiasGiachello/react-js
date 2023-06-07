import './CartWidget.css'

const CartWidget = () => {
    const imgcarrito = "https://w7.pngwing.com/pngs/225/984/png-transparent-computer-icons-shopping-cart-encapsulated-postscript-shopping-cart-angle-black-shopping-thumbnail.png"

  return (
    <div>
        <img className='imgCarrito' src={imgcarrito} alt="carritos de compras " />
        <strong>12</strong>
    </div>
  )
}

export default CartWidget