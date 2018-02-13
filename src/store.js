import {createStore, applyMiddleware, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import thunk from 'redux-thunk';
import {loadAuthToken} from './local-storage';
import authReducer from './reducers/auth';
import recipiesReducer from './reducers/recipies';
import liveSearchReducer from './reducers/liveSearch';
import recipieDetailsReducer from './reducers/recipieDetails';
import deleteRecipieReducer from './reducers/deleteRecipie';
import {setAuthToken, refreshAuthToken} from './actions/auth';

const store = createStore(
    combineReducers({
        form: formReducer,
        auth: authReducer,
        recipies: recipiesReducer,
        searchTerm: liveSearchReducer,
        recipie: recipieDetailsReducer,
        deleteRecipie: deleteRecipieReducer
    }),
    applyMiddleware(thunk)
);

// Hydrate the authToken from localStorage if it exist
const authToken = loadAuthToken();
if (authToken) {
    const token = authToken;
    store.dispatch(setAuthToken(token));
    store.dispatch(refreshAuthToken());
}

export default store;