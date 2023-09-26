import React, { PropsWithChildren } from 'react'
import { ListItem, ListItemButton, ListItemText, Checkbox } from '@mui/material'
import { ITask } from '../../types/ToDoList';
import { useTasksActions } from '../../hooks/useTasksActions';

interface TaskListItemProps {
  task: ITask;
}

const TaskListItem: React.FC<PropsWithChildren<TaskListItemProps>> = ({children, task}) => {

  const { changeStatus } = useTasksActions();

  const changeChecked = (task: ITask) => {
    changeStatus(task.id);
  }

  return (
    <ListItem disablePadding>
      <ListItemButton dense
      onClick={() => changeChecked(task)}>
        <Checkbox
          edge="start"
          checked={task.done}
          disableRipple
        />
        <ListItemText primary={children}/>
      </ListItemButton>
    </ListItem>
  )
}

export default TaskListItem;