import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import {ManageSongPage} from './ManageSongPage';


describe('Manage Song Page', ()=>{
    it('sets error message when trying to save an empty title', ()=>{
        const props={
            authors: [],
            song:{
                id: '',
                watchRef: '',
                title: '',
                authorId: '',
                length: '',
                category: ''
            },
            actions: {saveSong:()=>{return Promise.resolve();}}
        };
        const wrapper = mount(<ManageSongPage {...props}/>);
        const saveButton = wrapper.find('input').last();
        expect(saveButton.prop('type')).toBe('submit');
        saveButton.simulate('click');
        expect(wrapper.state().errors.title).toBe('Title must be at least 5 charcters');
    })
})
