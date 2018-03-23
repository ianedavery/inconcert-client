import addRecipieReducer from './addRecipie';
import {addRecipieSuccess} from '../actions/addRecipie';

describe('addRecipie', () => {

    it('Should set the initial state when nothing is passed in', () => {
        const state = addRecipieReducer(undefined, {type: '__UNKNOWN'});
        expect(state).toEqual(state);
    });

    it('Should return the current state on an unknown action', () => {
        let currentState = {};
        const state = addRecipieReducer(currentState, {type: '__UNKNOWN'});
        expect(state).toBe(currentState);
    });

	it('should add new recipes', () => {
		let state;
		state = addRecipieReducer(state, addRecipieSuccess({
			name: 'waffles',
			instructions: 'mix it all together',
			ingredients: {
				ingredient: 'flour',
				measurement: '1 cup'
			}
		}));
		expect(state).toEqual({newRecipie: {
			name: 'waffles',
			instructions: 'mix it all together',
			ingredients: {
				ingredient: 'flour',
				measurement: '1 cup'
			}
		}});
	});

});