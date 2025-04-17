import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import ShowTask from './components/ShowTask';
import AddTask from './components/AddTask';

function App() {
  const [tasklist, setTasklist] = useState([]);
  const [task, setTask] = useState({});
  return (
    <div className="App">
      <div className='Container'>
        <Header/>
        <AddTask 
        tasklist={tasklist} 
        setTasklist={setTasklist}
        task={task}
        setTask={setTask}
        />
        <ShowTask 
        tasklist={tasklist} 
        setTasklist={setTasklist}
        task={task}
        setTask={setTask}
        />
      </div>
    </div>
  );
}

export default App;
