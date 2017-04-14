import React, {PropTypes} from 'react';
import {Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';
//stateless component
const Header = ({loading})=>{
    return(
        <nav className="navbar navbar-default">
            <div className="container">
                <ul className="nav navbar-nav navbar-left">
                <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
                <li><Link to="/songs" activeClassName="active">Songs</Link></li>
                <li><Link to="/about" activeClassName="active">About {loading && <LoadingDots interval={100} dots={20}/>}</Link></li>
                
                </ul>
            </div>
        </nav>
    );
};

Header.propTypes = {
    loading: PropTypes.bool.isRequired
};

export default Header;