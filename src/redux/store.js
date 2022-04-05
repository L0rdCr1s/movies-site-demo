import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import movieReducer from 'redux/movie-details';

/**
 * These constants are here to override redux persist values of
 * these constants, it's not a great idea but importing them from
 * redux persist brings an error that stops an app from running.
 * If you can fix it, then do so if not leave it to run dangerously
 * */
const FLUSH = 'persist/FLUSH';
const REHYDRATE = 'persist/REHYDRATE';
const PAUSE = 'persist/PAUSE';
const PERSIST = 'persist/PERSIST';
const PURGE = 'persist/PURGE';
const REGISTER = 'persist/REGISTER';

const persistConfig = {
    key: 'root',
    storage,
    blacklist: [],
};

const reducers = combineReducers({
    movieStore: movieReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

persistStore(store);
