import { configureStore } from '@reduxjs/toolkit';
import ticketsReducer from './tickets'

export const store = configureStore({
  reducer: {
    tickets: ticketsReducer,
  },
});
