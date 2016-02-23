import { combineReducers } from 'redux';

let baseReducer = function(state = {}, action) {
	switch(action.type) {
		default:
			return state;
	}
}

const rootReducer = combineReducers({
	baseReducer
});

export default rootReducer;
