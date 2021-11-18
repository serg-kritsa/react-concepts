import React from 'react';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';

const Header = () => (
  <div className='header'>
    <div className='logo-container'>
      <Logo className='logo' />
    </div>
    <div className='options'>
      <div className='option'>
        SHOP
      </div>
      <div className='option'>
        CONTACT
      </div>
    </div>
  </div>
);

export default Header;
