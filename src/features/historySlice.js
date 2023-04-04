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
        },
        remove: (state, param) => {
            const { payload } = param
            state.data = [...state.data.slice(0,payload), ...state.data.slice(payload + 1)]
            console.log(state.data, payload);
        }
    }
})

export const { add, remove } = historySlice.actions
export const selectHistory = (state) => state.history.data
export default historySlice.reducer