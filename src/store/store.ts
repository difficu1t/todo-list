import { configureStore } from "@reduxjs/toolkit"
import categoryReducer from './slices/category.slice'
import todoReducer from './slices/todo.slice'

export const store = configureStore({
  reducer: {
    tasks: todoReducer,
    categorys: categoryReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispath = typeof store.dispatch