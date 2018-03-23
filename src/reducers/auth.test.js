import authReducer from './auth';
import {
	authSuccess,
	setAuthToken,
	clearAuth,
	authRequest,
	authError} from '../actions/auth';

describe('auth', () => {

    it('Should set the initial state when nothing is passed in', () => {
        const state = authReducer(undefined, {type: '__UNKNOWN'});
        expect(state).toEqual(state);
    });

    it('Should return the current state on an unknown action', () => {
        let currentState = {};
        const state = authReducer(currentState, {type: '__UNKNOWN'});
        expect(state).toBe(currentState);
    });

	it('should set currentUser', () => {
		let state;
		state = authReducer(state, authSuccess('ian'));
		expect(state).toEqual(
		{
		    authToken: null,
		    currentUser: 'ian',
		    loading: false,
		    error: null
		});
	});

	it('should set authToken', () => {
		let state;
		state = authReducer(state, setAuthToken('123'));
		expect(state).toEqual(
		{
		    authToken: '123',
		    currentUser: null,
		    loading: false,
		    error: null
		});
	});

	it('should set authToken and currentUser', () => {
		let state;
		state = authReducer(state, clearAuth());
		expect(state).toEqual(
		{
		    authToken: null,
		    currentUser: null,
		    loading: false,
		    error: null
		});
	});

	it('should set loading and error', () => {
		let state;
		state = authReducer(state, authRequest());
		expect(state).toEqual(
		{
		    authToken: null,
		    currentUser: null,
		    loading: true,
		    error: null
		});
	});

	it('should set loading and error', () => {
		let state;
		state = authReducer(state, authError('err'));
		expect(state).toEqual(
		{
		    authToken: null,
		    currentUser: null,
		    loading: false,
		    error: 'err'
		});
	});				

});