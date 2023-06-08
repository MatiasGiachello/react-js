import React from 'react'
import './navbar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return (
        <header>
            <div className='containerNav'>
            <h1>CLOSE RIVER</h1>
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
                <CartWidget/>
            </div>
        </header>
    )
}

export default NavBar