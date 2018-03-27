import liveSearchReducer from '../liveSearch';
import {recipiesSearchTerm} from '../../actions/liveSearch';

describe('liveSearch', () => {

    it('Should set the initial state when nothing is passed in', () => {
        const state = liveSearchReducer(undefined, {type: '__UNKNOWN'});
        expect(state).toEqual(state);
    });

    it('Should return the current state on an unknown action', () => {
        let currentState = {};
        const state = liveSearchReducer(currentState, {type: '__UNKNOWN'});
        expect(state).toBe(currentState);
    });

	it('should set searchTerm state', () => {
		let state;
		state = liveSearchReducer(state, recipiesSearchTerm('waffles'));
		expect(state).toEqual({searchTerm: 'waffles'});
	});    

});