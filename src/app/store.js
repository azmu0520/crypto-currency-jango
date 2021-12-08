import { configureStore } from '@reduxjs/toolkit';
import { cryptoApi } from '../servises/cryptoapi';
import { cryptoNewsApi } from '../servises/cryptoNewsApi';
export default configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
  },
});
