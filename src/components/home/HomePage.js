import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
    render(){
        return(
            <div className="jumbotron">
                <h1>Cool Music Players</h1>
                <p>React, Redux and React Router with ES6 for an ultra cool and modern webapp.</p>
                <Link to="about" className="btn btn-primary">Learn more</Link>
            </div>
        );
    }
}

export default HomePage; 