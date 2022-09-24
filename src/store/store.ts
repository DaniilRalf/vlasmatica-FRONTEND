import {configureStore} from "@reduxjs/toolkit";
import Modal_Slice from "./slices/Modal_Slice";

export const store = configureStore({
    reducer: {
        modal_slice: Modal_Slice,
    },
})