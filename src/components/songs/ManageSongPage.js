import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as songActions from '../../actions/songActions';
import SongForm from './SongForm';
import {browserHistory} from 'react-router';
import {authorsFormattedForDropdown} from '../../selectors/selectors';
import toastr from 'toastr';

export class ManageSongPage extends React.Component {
    constructor(props, context){
        super(props, context);
        this.state = {
            song: Object.assign({}, this.props.song),
            errors: {},
            saving: false
        };
        this.updateSongState = this.updateSongState.bind(this);
        this.saveSong = this.saveSong.bind(this);
    }
    componentWillReceiveProps(nextProps){
        if(this.props.song.id != nextProps.song.id){
            // if props change the state is updated, this is good in case of async call that returns props after component mounted
            this.setState({song: Object.assign({}, nextProps.song)});
        }
    }
    updateSongState(event){
        const field = event.target.name;
        let song = this.state.song;
        song[field] = event.target.value;
        return this.setState({song: song});
    }
    songFromIsValid(){
        let formIsValid = true;
        let errors = {};

        if(this.state.song.title.length <5){
            errors.title = 'Title must be at least 5 charcters';
            formIsValid = false;
        }

        this.setState({errors: errors});
        return formIsValid;
    }
    saveSong(event){
        event.preventDefault();
        if(!this.songFromIsValid()){
            return;
        }
        this.setState({saving:true});
        this.props.actions.saveSong(this.state.song).then(()=>{
            this.setState({saving:false});
            toastr.success('Course saved');
            browserHistory.push('/songs');
        }).catch(error=>{
            this.setState({saving:false});
            toastr.error(error);
        });
    }
    render(){
        return(
            <div>
                <h1>Manage song</h1>
                <SongForm 
                allAuthors = {this.props.authors}
                onChange ={this.updateSongState}
                onSave = {this.saveSong}
                song={this.state.song}
                errors={this.state.errors}
                saving={this.state.saving}
                />
            </div>
        );
    }
}
ManageSongPage.propTypes = {
    song: PropTypes.object.isRequired,
    authors: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};
function getSongById(songs, id){
    const song = songs.filter(song=>song.id==id);
    if(song) return song[0];
    return null;
}
function mapStateToProps(state, ownProps){
    const songId = ownProps.params.id;

    let song = {id:'', watchHref:'', title:'', authorId:'', length:'', category:''};

    if(songId && state.songs.length > 0){
        song = getSongById(state.songs, songId);
    }

    return {
        song: song,
        authors: authorsFormattedForDropdown(state.authors)
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