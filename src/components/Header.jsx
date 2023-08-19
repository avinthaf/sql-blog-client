import React from 'react';

import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
        <Link to="/">
          <h1><u>SIMPLE JS + SQL BLOG</u></h1>
        </Link>
        <small>This blog was made using React JS, React-Router, Node JS, Express JS and SQL</small>
    </div>
  )
}

export default Header;