import {configureStore} from '@reduxjs/toolkit';
import coreReducer from './modules/core/infrastructure/redux/reducers';
import financialProductReducer from './modules/financial-product/infrastructure/redux';

const store = configureStore({
  reducer: {
    core: coreReducer,
    financialProduct: financialProductReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
