import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import './NavbarStyles.css'

const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(click)

    return (
        <div className='header'>
            <Link to='/' ><h1>Navbar</h1></Link>
            <ul className={click ? 'nav-menu: active' : 'nav-menu'}>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/pricing'>Pricin</Link>
                </li>
                <li>
                    <Link to='/meteors'>Meteors</Link>
                </li>
                <li>
                    <Link to='/basica3d'>Basica3D</Link>
                </li>
                <li>
                    <Link to='/escenas1'>Escenas1</Link>
                </li>
                <li>
                    <Link to='/barco'>Barco</Link>
                </li>
                <li>
                    <Link to='/register'>Register</Link>
                </li>

                <li>
                    <Link to='/login'>Login</Link>
                </li>


            </ul>
            <div className='hamburger' onClick={handleClick}>
                {click ? (<FaTimes size={20} style={{ color: '#fff' }} />) : (<FaBars size={20} style={{ color: '#fff' }} />)}

            </div>
        </div>
    )
}
export default Navbar