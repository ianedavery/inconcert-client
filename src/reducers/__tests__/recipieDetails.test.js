import recipieDetailsReducer from '../recipieDetails';
import {fetchRecipieDetailsSuccess} from '../../actions/recipieDetails';

describe('recipieDetails', () => {

    it('Should set the initial state when nothing is passed in', () => {
        const state = recipieDetailsReducer(undefined, {type: '__UNKNOWN'});
        expect(state).toEqual(state);
    });

    it('Should return the current state on an unknown action', () => {
        let currentState = {};
        const state = recipieDetailsReducer(currentState, {type: '__UNKNOWN'});
        expect(state).toBe(currentState);
    });

	it('should fetch recipie details', () => {
		let state;
		state = recipieDetailsReducer(state, fetchRecipieDetailsSuccess('waffles'));
		expect(state).toEqual({recipie: 'waffles'});
	});

});