import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from './slices/category.slice'

export const store = configureStore({
  reducer: {
    categorys: categoryReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispath = typeof store.dispatch