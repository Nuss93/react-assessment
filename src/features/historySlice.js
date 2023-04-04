import { createSlice } from "@reduxjs/toolkit";

export const historySlice = createSlice({
    name: 'history',
    initialState: {
        data: []
    },
    reducers: {
        add: (state, param) => {
            const { payload } = param;
            state.data = [...state.data, payload]
        }
    }
})

export const { add } = historySlice.actions
export const selectHistory = (state) => state.history.data
export default historySlice.reducer