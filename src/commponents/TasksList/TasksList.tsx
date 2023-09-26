import React from 'react'
import { List } from '@mui/material'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { Category } from '../../types/Category';
import TaskListItem from '../TaskListItem/TaskListItem';

const TaskList: React.FC = () => {

  const { tasks } = useTypedSelector(state => state.tasks);
  const { categorys } = useTypedSelector(state => state.categorys);
  const category = categorys.find(category => category.active);

  return (
    <List sx={{
      maxWidth: 500
    }}>
      {tasks.map(task => {
        if(category){
          if(category.name === Category.ACTIVE){
            if(!task.done)
              return <TaskListItem key={task.id} task={task}>{task.text}</TaskListItem>
          } else if(category.name === Category.COMPLITED) {
            if(task.done)
              return <TaskListItem key={task.id} task={task}>{task.text}</TaskListItem>
          } else 
            return <TaskListItem key={task.id} task={task}>{task.text}</TaskListItem>
        }
      })}
    </List>
  )
}

export default TaskList;