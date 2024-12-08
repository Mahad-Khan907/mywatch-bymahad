"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <h1 className="logo">My Watches</h1>
      <nav className={menuOpen ? 'nav active' : 'nav'}>
        <Link href="/">Home</Link>
        <Link href="/watches">Watches</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <FaShoppingCart className='cart'/>
      </nav>
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </header>
  );
};

export default Header;
