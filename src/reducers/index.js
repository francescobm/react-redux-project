import {combineReducers} from 'redux';
import songs from './songReducer';
import authors from './authorReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
	//es6 shorthand property name
	songs,
	authors,
	ajaxCallsInProgress
});

export default rootReducer;