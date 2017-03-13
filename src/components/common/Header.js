import React, {PropTypes} from 'react';
import {Link, IndexLink } from 'react-router';
//stateless component
const Header = ()=>{
    return(
        <nav>
            <IndexLink to="/" activeClassName="active">Home</IndexLink>
            {" | "}
            <Link to="/songs" activeClassName="active">Songs</Link>
            {" | "}
            <Link to="/about" activeClassName="active">About</Link>
        </nav>
    );
};

export default Header;