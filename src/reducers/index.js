import {combineReducers} from 'redux';
import songs from './songReducer';

const rootReducer = combineReducers({
	//es6 shorthand property name
	songs
});

export default rootReducer;