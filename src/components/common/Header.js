import React, {PropTypes} from 'react';
import {Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';
//stateless component
const Header = ()=>{
    return(
        <nav>
            <IndexLink to="/" activeClassName="active">Home</IndexLink>
            {" | "}
            <Link to="/songs" activeClassName="active">Songs</Link>
            {" | "}
            <Link to="/about" activeClassName="active">About</Link>
            <LoadingDots interval={100} dots={20}/>
        </nav>
    );
};

export default Header;