import * as types from '../actions/actionTypes';

export default function songReducer(state = [], action){
	switch(action.type){
		//to preserve immutability use es6 spread operator which returns a new array 
		//and object.assign() to create a deep copy of the action object
		case types.CREATE_SONG:
			return [...state,
			Object.assign({}, action.song)];
		
		case types.LOAD_SONGS_SUCCESS:
			return action.songs;
		
		default:
			return state;
	}
}