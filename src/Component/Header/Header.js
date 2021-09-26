import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'
const Header = () => {
    return (
        <div className="header-cs">
          
            <img src={logo} alt="" />
         <nav className="fontt" >
             <a className="nav-d" href="/shop">shop</a>
             <a className="nav-d" href="/order">order</a>
             <a className="nav-d" href="/inventory">inventory</a>
             <a className="nav-d" href="/review">review</a>
         </nav>

        </div>
    );
};

export default Header;