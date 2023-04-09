import { GeneralAttribute, ID } from "@/components/attributes/types";
import { createSlice } from "@reduxjs/toolkit";
import type {Action} from "@reduxjs/toolkit"

export type stateType = {
    attributes: Map<ID, GeneralAttribute>; 
}

const initialState:stateType = {
    attributes: new Map<ID, GeneralAttribute>()
};

export const attributesSlice = createSlice({
    name: "attributesSlice",
    initialState,
    reducers: {
        load: (state: stateType, action : {type: string, payload: Array<GeneralAttribute>}) => {
            action.payload.forEach(a => {
                state.attributes.set(a.ID, a);
            })
        },
    },
});

export const actions = attributesSlice.actions;
export default attributesSlice.reducer;
