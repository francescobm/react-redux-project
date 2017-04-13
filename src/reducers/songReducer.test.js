import expect from 'expect';
import songReducer from './songReducer';
import * as actions from '../actions/songActions';

describe('Song Reducer', ()=>{
    it('should add course when passed CREATE_SONG_SUCCESS',()=>{
        //arrange
        const initialState=[
            {title:'A'},
            {title:'B'}
        ];
        const newSong = {title:'C'};
        const action = actions.createSongSuccess(newSong);

        //act
        const newState = songReducer(initialState, action);

        //assert
        expect(newState.length).toEqual(3);
        expect(newState[0].title).toEqual('A');
        expect(newState[1].title).toEqual('B');
        expect(newState[2].title).toEqual('C');
    });

    it('should update course when passed UPDATE_SONG_SUCCESS',()=>{
        //arrange
        const initialState=[
            {id:'A', title:'A'},
            {id:'B', title:'B'}
        ];
        const song = {id:'A', title:'Modified A'};
        const action = actions.updateSongSuccess(song);

        //act
        const newState = songReducer(initialState, action);
        const updatedSong = newState.find(a=>a.id == song.id);
        const untouchedSong= newState.find(a=> a.id == 'B');

        //assert
        expect(updatedSong.title).toEqual('Modified A');
        expect(untouchedSong.title).toEqual('B');
        expect(newState.length).toEqual(2);
    });
});