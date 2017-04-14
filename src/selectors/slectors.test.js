import expect from 'expect';
import {authorsFormattedForDropdown} from './selectors';

describe('Author selectors', ()=>{
	describe('authorsFormattedForDropdown',()=>{
		it('should return author data formatted for use in dropdown', ()=>{
			const authors=[
				{id:'md', firstName:'Muddy', lastName:'Waters'},
				{id:'mk', firstName:'Mark', lastName:'Knoplfer'}
			];

			const expected=[
				{value:'md', text:'Muddy Waters'},
				{value:'mk', text:'Mark Knoplfer'}
			];

			expect(authorsFormattedForDropdown(authors)).toEqual(expected);
		});
	});
});