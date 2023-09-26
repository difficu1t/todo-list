import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux"
import { actions } from "../store/slices/category.slice";

export const useCategorysActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
}