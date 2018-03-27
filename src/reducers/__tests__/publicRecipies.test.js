import publicRecipiesReducer from '../publicRecipies';
import {fetchPublicRecipiesSuccess} from '../../actions/publicRecipies';

describe('publicRecipies', () => {

    it('Should set the initial state when nothing is passed in', () => {
        const state = publicRecipiesReducer(undefined, {type: '__UNKNOWN'});
        expect(state).toEqual(state);
    });

    it('Should return the current state on an unknown action', () => {
        let currentState = {};
        const state = publicRecipiesReducer(currentState, {type: '__UNKNOWN'});
        expect(state).toBe(currentState);
    });

	it('should fetch public recipies', () => {
		let state;
		state = publicRecipiesReducer(state, fetchPublicRecipiesSuccess('waffles'));
		expect(state).toEqual({publicRecipies: 'waffles'});
	});

});