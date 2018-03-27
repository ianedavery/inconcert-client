import recipiesReducer from '../recipies';
import {fetchRecipiesSuccess} from '../../actions/recipies';

describe('recipie', () => {

    it('Should set the initial state when nothing is passed in', () => {
        const state = recipiesReducer(undefined, {type: '__UNKNOWN'});
        expect(state).toEqual(state);
    });

    it('Should return the current state on an unknown action', () => {
        let currentState = {};
        const state = recipiesReducer(currentState, {type: '__UNKNOWN'});
        expect(state).toBe(currentState);
    });

	it('should fetch recipie details', () => {
		let state;
		state = recipiesReducer(state, fetchRecipiesSuccess('waffles'));
		expect(state).toEqual({recipies: 'waffles'});
	});

});