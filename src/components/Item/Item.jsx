import './Item.css'
import { Link } from 'react-router-dom'

const Idem = ({id, nombre, precio, img}) => {
  return (
    <div className='cardProduct'>
        <img  className= 'imgProduct' src="{img}" alt="{nombre}" />
        <h3>Nombre: {nombre}</h3>
        <p>Precio: {precio}</p>
        <p>ID: {id}</p>
        <Link to={'/Item/${id}'}> Ver Mas</Link>

    </div>
  )
}

export default Idem