import deleteIcon from "../assets/x-square-fill.svg"
import editIcon from "../assets/pencil-square.svg"
const ShowTask = ({tasklist, setTasklist, task, setTask}) => {
  const handleEdit = (id) => {
    const selectedTask = tasklist.find(task => task.id)
    setTask(selectedTask)

  }
  const handleDelete = (id) =>{
    const updatedTaskList = tasklist.filter(task => task.id !== id);
    setTasklist(updatedTaskList);
  }
  return (
    <section className="showTask">
      <div className="head">
        <div>
          <span className="titile">Todo</span>
          <span className="count">{tasklist.length}</span>
        </div>
        <button className="clearAll" onClick={()=> setTasklist([])}>Clear All</button>
      </div>
      <ul>
        { tasklist.map((task) => (
          <li key={task.id}>
            <p>
              <span className="name">{task.name}</span>
              <span className="time">{task.time}</span>
            </p>
            <i><img onClick={()=> handleEdit(task.id)} src={editIcon} className="editIcon" alt="editIcon" width="16" height="16" /></i>
            <i><img onClick={()=> handleDelete(task.id)} src={deleteIcon} className="deleteIcon" alt="deleteIcon" width="16" height="16" /></i>
          </li>
        )) }
      </ul>
    </section>
  )
}

export default ShowTask