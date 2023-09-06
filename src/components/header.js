import React from "react";
import {Link, useLocation} from 'react-router-dom';
import index from "../styles/header.module.css";

const Header = ({ search, updateQuery, pathName }) => {
  return (
    <header className={index.container}>
      <h1 className={index.heading}> <Link to='/'>Death Note</Link> </h1>
      <nav className='navigation'>
        <ul>
          <li>
            { pathName !== '/archived'
            ? <Link to='/archived' title='archived'>Arsip</Link>
            : <Link to='/' title='Home'></Link> }
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
