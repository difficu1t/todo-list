import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ToDoState } from '../../types/ToDoList'

const initialState: ToDoState = {
  tasks: [
    {id: 0, text: "Домашка", done: false},
    {id: 1, text: "Уборка", done: true},
    {id: 2, text: "Мусор", done: true},
  ]
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    changeStatus: (state, action: PayloadAction<number>) => {
      for (let task of state.tasks) {
        if (task.id === action.payload)
          task.done = !task.done;
      }
    }
  }
})

export const { actions } = todoSlice;
export default todoSlice.reducer;