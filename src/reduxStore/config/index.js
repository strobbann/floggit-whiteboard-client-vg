import { combineReducers } from 'redux';
import notes from './notes';
import whiteboards from './whiteboards';

const reducer = combineReducers({
  notes,
  whiteboards,
});

export default reducer;
