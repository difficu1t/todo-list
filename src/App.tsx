import React from 'react'
import MyNavBar from './commponents/MyNavBar/MyNavBar'
import TaskList from './commponents/TasksList/TasksList'

const App:React.FC = () => {

  return (
    <>
      <MyNavBar />
      <TaskList />
    </>
  )
}

export default App