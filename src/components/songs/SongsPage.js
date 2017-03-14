import React from 'react';
import {Link} from 'react-router';
import * as songActions from '../../actions/songActions';

class SongsPage extends React.Component {
    constructor(props, context){
        super(props, context);
        this.state = {
            song: {title: ""}
        };
        //bind this of the two functions below to the component context 
        //better to do binding here as in render() would cause performance issues
        this.onTitleChange = this.onTitleChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
    }
    onTitleChange(event){
        const song = this.state.song;
        song.title = event.target.value;
        this.setState({song: song});
    }
    onClickSave(){
        //thanks to connect function below we can dispatch an action
        this.props.dispatch(songActions.createSong(this.state.song))
    }
    render(){
        return(
            <div className="row">
                <div className="col-xs-12 text-center">
                    <h1>Songs List</h1>
                    <h2>Add Song</h2>
                    <input
                        type="text"
                        onChange={this.onTitleChange}
                        value={this.state.song.title} />
                    <input
                        type="submit"
                        value="Save"
                        onClick={this.onClickSave} />
                </div>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps){
    return {
        songs: state.songs 
    };
}
export default connect(mapStateToProps)(SongsPage); 