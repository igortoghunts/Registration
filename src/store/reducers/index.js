import { combineReducers } from 'redux';
import { reducer as formReducer} from 'redux-form';

import { checkUser } from './user';

export default combineReducers({ checkUser, formReducer});
