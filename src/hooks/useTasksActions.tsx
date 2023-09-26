import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import {actions} from "../store/slices/todo.slice"

export const useTasksActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
}