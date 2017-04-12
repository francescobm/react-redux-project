import * as types from './actionTypes';
import songApi from '../api/mockSongApi';

export function createSong(song) {
	return {type: types.CREATE_SONG, song};
}
export function loadSongsSuccess(songs){
	return {type: types.LOAD_SONGS_SUCCESS, songs};
}
export function updateSongSuccess(song){
	return {type: types.UPDATE_SONG_SUCCESS, song};
}
export function createSongSuccess(song){
	return {type: types.CREATE_SONG_SUCCESS, song};
}
//with thunk actions contains a function wich accept dispatch as param
export function loadSongs(){
	return dispatch=>{
		return songApi.getAllSongs().then(songs =>{
			dispatch(loadSongsSuccess(songs));
		}).catch(error =>{
			throw(error);
		});
	};
}

export function saveSong(song){
	return (dispatch, getState)=>{
		return songApi.saveSong(song).then(savedSong =>{
			song.id ? dispatch(updateSongSuccess(savedSong)) : dispatch(createSongSuccess(savedSong));
		}).catch(error =>{
			throw(error);
		});
	};
}