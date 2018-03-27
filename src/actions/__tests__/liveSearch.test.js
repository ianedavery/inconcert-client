import {RECIPIES_SEARCH_TERM, recipiesSearchTerm} from '../liveSearch';

describe('liveSearch', () => {

	it('should return the action', () => {
		const searchTerm  = 'waffles';
		const action = recipiesSearchTerm(searchTerm);
		expect(action.type).toEqual(RECIPIES_SEARCH_TERM);
		expect(action.searchTerm).toEqual(searchTerm);
	});
	
});