import { combineReducers, createStore, Store } from 'redux';
import dialogsReducer from './dialogsReducer';

export type RootState = ReturnType<typeof reducers>;

const reducers = combineReducers({
  dialogs: dialogsReducer
});

const store: Store<RootState> = createStore(reducers);

export type AppDispatch = typeof store.dispatch;

export default store;
