import { combineReducers } from "@reduxjs/toolkit";
import { authUser } from "../slices";



export const rootReducer = combineReducers({
    userAuth: authUser
});

export type RootState = ReturnType<typeof rootReducer>;