import { combineReducers, createStore, Store } from 'redux';

export type RootState = ReturnType<typeof reducers>;

const reducers = combineReducers({});

const store: Store<RootState> = createStore(reducers);

export type AppDispatch = typeof store.dispatch;

export default store;
