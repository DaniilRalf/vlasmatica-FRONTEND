import {createSlice} from "@reduxjs/toolkit";

const Modal_Slice = createSlice({
    name: 'modal',
    initialState: {
        active: '',
        body: '',
    },
    reducers: {
        setActive: (state, action) => {
            state.active = action.payload;
        },
        setBody: (state, action) => {
            state.body = action.payload;
        },
    }
})

export const { setActive, setBody } = Modal_Slice.actions;
export default Modal_Slice.reducer;