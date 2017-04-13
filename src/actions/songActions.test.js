import expect from 'expect';
import * as SongActions from './songActions';
import * as types from './actionTypes';

//Test a sync action
describe('Song Actions', ()=>{
    describe('createSongSuccess', ()=>{
        it('should create a CREATE_SONG_SUCCESS action', ()=>{
            //arrange
            const song = {id: 'enter-sandman', title:'Enter Sandman'};
            const expectedAction = {
                type: types.CREATE_SONG_SUCCESS,
                song: song
            };

            //act
            const action = SongActions.createSongSuccess(song);

            //assert
            expect(action).toEqual(expectedAction);
        });
    });
});