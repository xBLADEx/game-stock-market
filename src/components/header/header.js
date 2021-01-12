import React from 'react';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import './header.scss';

const Header = () => {
  return (
    <header className="row header">
      <Logo />
    </header>
  );
};

export default Header;
