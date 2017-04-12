import {combineReducers} from 'redux';
import songs from './songReducer';
import authors from './authorReducer';

const rootReducer = combineReducers({
	//es6 shorthand property name
	songs,
	authors
});

export default rootReducer;