import React from 'react'
import './navbar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return (
        <header>
            <h1>CLOSE RIVER</h1>


            <div className='containerNav'>
                <ul>
                    <li>
                        <a href="">INICIO</a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href="">PRODUCTOS</a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href="">AYUDA</a>
                    </li>
                </ul>
            </div>

        <CartWidget/>
        </header>
    )
}

export default NavBar