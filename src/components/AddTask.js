const AddTask = ({ tasklist, setTasklist, task, setTask }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const date = new Date();
    if (task.id) {
      const updatedTaskList = tasklist.map((taskIn)=> taskIn.id===task.id ? 
      {
        id: taskIn.id, 
        name: task.name, 
        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
      } : taskIn
    );
    setTasklist(updatedTaskList);
    } else {
      const newTask = {
        id: date.getTime(),
        name: event.target.task.value,
        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
      }
      setTasklist([...tasklist, newTask]);
      event.target.task.value = "";
    }
  }
  return (
    <section className="addTask">
      <form onSubmit={handleSubmit}>
        <input type="text" name="task" value={task.name} autoComplete="off" placeholder="add a task" maxLength={25} onChange={e => setTask({...task, name: e.target.value})} />
        <button type="submit">Add</button>
      </form>
    </section>
  )
}

export default AddTask