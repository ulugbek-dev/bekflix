import { createStore } from 'redux';
import state from './actions';

export const store = createStore(state);