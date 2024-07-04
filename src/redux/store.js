import { configureStore } from '@reduxjs/toolkit';

import emailSlice from './emailsSlice';


const store = configureStore({
  reducer: {
    emailLoad: emailSlice
  },
});


export default store;