import {combineReducers, configureStore} from "@reduxjs/toolkit";
import notesReducer from "./reducers/notesSlice/notesSlice"

const rootReducer = combineReducers({
  notesReducer
})

const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  })
}
export const store = setupStore();

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"]