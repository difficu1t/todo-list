import React from 'react'
import MyNavBar from './commponents/MyNavBar/MyNavBar'
import TaskList from './commponents/TasksList/TasksList'
import './global.css'

const App:React.FC = () => {

  return (
    <div className='todoContainer'>
      <div>
        <MyNavBar />
        <TaskList />
      </div>
    </div>
  )
}

export default App