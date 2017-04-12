import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function songReducer(state = initialState.songs, action){
	switch(action.type){
		//to preserve immutability use es6 spread operator which returns a new array 
		//and object.assign() to create a deep copy of the action object
		case types.CREATE_SONG:
			return [...state,
			Object.assign({}, action.song)];
		
		case types.LOAD_SONGS_SUCCESS:
			return action.songs;
		
		case types.CREATE_SONG_SUCCESS:
			return [
				...state,
				Object.assign({}, action.song)
			];

		case types.UPDATE_SONG_SUCCESS:
			return [
				...state.filter(song=>song.id !== action.song.id),
				Object.assign({}, action.song)
			];
		
		default:
			return state;
	}
}