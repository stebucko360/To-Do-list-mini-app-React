import './App.css';
import { useState } from 'react';
import { Headers } from './components/Headers';
import { Mainlist } from './components/Mainlist';
import { AddNewLI } from './components/AddNewLI';


function App() {
  
  const [toDoList, addToDoList] = useState([])

  return (
    <div>
      <Headers/>
      <Mainlist toDoList={toDoList} addToDoList={addToDoList}/>
      <AddNewLI addToDoList={addToDoList}/>
    </div>
  );
}

export default App;
