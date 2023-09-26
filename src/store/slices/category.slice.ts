import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { CategoryState } from '../../types/Category'

const initialState: CategoryState = {
  categorys: [
    {id: 0, name: "all", active: true},
    {id: 1, name: "active", active: false},
    {id: 2, name: "complited", active: false},
  ]
}

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    changeActive: (state, action: PayloadAction<number>) => {
      for (let category of state.categorys) {
        if (category.id === action.payload){
          category.active = true;
        } else {
          category.active = false;
        }
      }
    }
  }
})

export const { actions } = categorySlice;
export default categorySlice.reducer;