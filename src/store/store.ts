import { combineReducers, configureStore } from '@reduxjs/toolkit'
import modal from './features/modal/modal'
import user from './features/auth/user'
import edit from './features/edit/edit'
import { persistReducer } from 'redux-persist';
import createWebStorage from 'redux-persist/es/storage/createWebStorage';

/* NextJS에서 redux-persist failed to create sync storage. falling back to noop storage. 에러 제거하는법 */

const createNoopStorage = () => {
  return {
    getItem(_key: any) {
      return Promise.resolve(null);
    },
    setItem(_key: any, value: any) {
      return Promise.resolve(value);
    },
    removeItem(_key: any) {
      return Promise.resolve();
    },
  };
};

const storage =
  typeof window === 'undefined'
    ? createNoopStorage()
    : createWebStorage('local');

/* ㅡㅡㅡㅡㅡㅡㅡㅡㅡ */

const reducers = combineReducers({
  modal,user,edit
});

const persistConfig = { // 새로고침해도 남는 저장소
  key : "root",
  storage,
  whitelist : ['user'],
  blacklist : ['modal','edit']
}

const persistedReducer = persistReducer(persistConfig,reducers); // 새로고침해도 남는 저장소

export const makeStore = () => {
  return configureStore({
    reducer: persistedReducer,
    middleware : (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false // rtk을 사용할경우 serializableCheck을 false로 해줘야합니다.
      }),
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']