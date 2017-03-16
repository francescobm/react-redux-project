import * as types from './actionTypes';
import songApi from '../api/mockSongApi';

export function createSong(song) {
	return {type: types.CREATE_SONG, song};
}
export function loadSongsSuccess(songs){
	return {type: types.LOAD_SONGS_SUCCESS, songs};
}
//with thunk actions contains a function wich accept dispatch as param
export function loadSongs(){
	return function(dispatch){
		return songApi.getAllSongs().then(songs =>{
			dispatch(loadSongsSuccess(songs));
		}).catch(error =>{
			throw(error);
		});
	};
}