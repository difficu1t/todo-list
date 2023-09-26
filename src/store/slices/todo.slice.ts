import { createSlice } from '@reduxjs/toolkit'
import { ToDoState } from '../../types/ToDoList'

const initialState: ToDoState = {
  list: []
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {

  }
})