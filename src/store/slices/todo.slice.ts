import { createSlice } from '@reduxjs/toolkit'
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

  }
})

export const { actions } = todoSlice;
export default todoSlice.reducer;