import { combineReducers } from 'redux';
import { reducer as form} from 'redux-form';

import { checkbox } from './checkbox';

export default combineReducers({ checkbox,  form});
