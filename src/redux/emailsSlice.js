import { createSlice } from "@reduxjs/toolkit";


export const emailsSlice = createSlice({
    name: 'emailsSlice',
    initialState: {
        emailsData: null
    },
    reducers: {
        setEmailsResult: (state, action) => {
            state.emailsData = action.payload
        }
    }
});


export const { setEmailsResult } = emailsSlice.actions;

export default emailsSlice.reducer;