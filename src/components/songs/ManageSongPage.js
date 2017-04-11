import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as songActions from '../../actions/songActions';

class ManageSongPage extends React.Component {
    constructor(props, context){
        super(props, context);
    }
    render(){
        
        return(
            <h1>Manage course</h1>
        );
    }
}
ManageSongPage.propTypes = {
    
};
function mapStateToProps(state, ownProps){
    return {
        state: state
    };
}
//this function determines which actions are available in the component
//it's useful beacuse it allows to dispatch actions from component in a cleaner way
function mapDispatchToProps(dispatch){
    return{
        actions: bindActionCreators(songActions, dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(ManageSongPage); 