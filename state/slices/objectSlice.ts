import { createSlice } from "@reduxjs/toolkit";
import type {Action} from "@reduxjs/toolkit"

export type stateType = {
    id: string 
}

const initialState:stateType = {
    id: ""
};

export const objectSlice = createSlice({
    name: "objectSlice",
    initialState,
    reducers: {
        setId: (state: stateType, action) => {
            state.id = action.payload;
        },
    },
});

export const actions = objectSlice.actions;
export default objectSlice.reducer;
