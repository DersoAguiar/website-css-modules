import React, { useState } from 'react'
import styles from './Navbar.module.css';
import {AiOutlineMenu, AiOutlineClose, AiOutlineSearch, AiOutlineUser} from 'react-icons/ai';

const Navbar = () => {
    const [nav, setNav] = useState(false);

  return (
    <header className={styles.navbar}>
        <img src="https://graphicsfamily.com/wp-content/uploads/edd/2021/07/Free-Car-Logo-Design-Source-PNG-Transparent.png" alt="Logo" />
        <nav>
            <ul className={nav ? [styles.menu, styles.active].join(' ') : [styles.menu] }>
                <li>
                    <a href="/">Learn More</a>
                </li>
                <li>
                    <a href="/">Log in</a>
                </li>
                <li>
                    <a href="/">Sign up</a>
                </li>

                <li>
                    <AiOutlineSearch size={25} styte={{marginTop: '6px'}} />
                </li>

                <li>
                    <AiOutlineUser size={25} styte={{marginTop: '6px'}} />
                </li>
            </ul>
        </nav>

        <div onClick={() => setNav(!nav)} className={styles.mobile_btn}>
            {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} /> }            
        </div>

    </header>
  )
}

export default Navbar