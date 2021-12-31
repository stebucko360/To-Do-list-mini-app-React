import './App.css';
import { useState } from 'react';
import { Headers } from './components/Headers';
import { Mainlist } from './components/Mainlist';
import { AddNewLI } from './components/AddNewLI';
import { CompletedTasks } from './components/CompletedTasks';


function App() {
  
  const [toDoList, addToDoList] = useState([])
  const [completedTasks, addCompletedTasks] = useState([])

  return (
    <div className="main">
      <Headers/>
      <Mainlist toDoList={toDoList} addToDoList={addToDoList} addCompletedTasks={addCompletedTasks}/>
      <AddNewLI addToDoList={addToDoList}/>
      <CompletedTasks completedTasks={completedTasks}/>
    </div>
  );
}

export default App;
