export default function songReducer(state = [], action){
	switch(action.type){
		//to preserve immutability use es6 spread operator which returns a new array 
		//and object.assign() to create a deep copy of the action object
		case 'CREATE_SONG':
			return [...state,
			Object.assign({}, action.song)];
		
		default:
			return state;
	}
}