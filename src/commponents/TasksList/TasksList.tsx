import React from 'react'
import { List, ListItem } from '@mui/material'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { Category } from '../../types/Category';

const TaskList: React.FC = () => {

  const { tasks } = useTypedSelector(state => state.tasks);
  const { categorys } = useTypedSelector(state => state.categorys);
  const category = categorys.find(category => category.active);

  return (
    <List>
      {tasks.map(task => {
          if(category){
            if(category.name === Category.ACTIVE){
              if(!task.done)
                return <ListItem key={task.id}>{task.text}</ListItem>
            } else if(category.name === Category.COMPLITED) {
              if(task.done)
                return <ListItem key={task.id}>{task.text}</ListItem>
            } else 
              return <ListItem key={task.id}>{task.text}</ListItem>
          }
        })}
    </List>
  )
}

export default TaskList;