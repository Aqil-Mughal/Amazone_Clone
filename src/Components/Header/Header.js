import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';



function Header() {
  return (
    <nav className="header">
      <Link to="/">  
        <img className="image_logo" src="AMZN_BIG.D.png"/>
      </Link>
      <div className="Header__search">
      <input type="text" className="header_searchInput" />
      <SearchIcon className="header_searchicon"/>
      </div>

      <div className="header_nav">
        <Link to="/" className="header__link">
        <div className="header_option">
          <span className='header_optionline1'>Hello,</span>
          <span className='header_optionline2'>Signin</span>
        </div>
        </Link>

        <Link to="/" className="header__link">
        <div className="header_option">
          <span className='header_optionline1'>Return</span>
          <span className='header_optionline2'>& Orders</span>
        </div>
        </Link>

        <Link to="/" className="header__link">
        <div className="header_option">
          <span className='header_optionline1'>Your</span>
          <span className='header_optionline2'>Prime</span>
        </div>
        </Link>
        <Link to="/checkout">
        <div className="header_optionBasket">
          <AddShoppingCartIcon />
          <span className='header_optionline2 header_Basketcount'>0</span>
        </div>
        </Link>
      </div>
    </nav>
  )
}

export default Header