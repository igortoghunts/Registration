import { combineReducers } from 'redux';
import { reducer as formReducer} from 'redux-form';

import { selectUser } from './user';

export default combineReducers({ selectUser, formReducer});
