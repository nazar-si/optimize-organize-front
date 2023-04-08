import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import objectSlice from "../slices/objectSlice";

export const store = configureStore({
    reducer: {
        objectReducer: objectSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }),
});


export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    AppState,
    unknown,
    Action<string>
>