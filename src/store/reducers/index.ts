import { combineReducers } from "redux";
import { courseReducer } from "./courseReducer";

export const rootReducer = combineReducers({
    course: courseReducer
})

export type RootState = ReturnType<typeof rootReducer>