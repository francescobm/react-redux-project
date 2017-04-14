import expect from 'expect';
import { createStore } from 'redux';
import rootReducer from '../reducers';
import initialState from '../reducers/initialState';
import * as songActions from '../actions/songActions';

describe('Store',()=>{
	it('should handle creating songs', ()=>{
		//arrange
		const store = createStore(rootReducer, initialState);
		const song = {
			title: "The title"
		};

		//act 
		const action = songActions.createSongSuccess(song);
		store.dispatch(action);

		//assert
		const actual= store.getState().songs[0];
		const expected = {
			title: 'The title'
		};
		expect(actual).toEqual(expected);

	})
})