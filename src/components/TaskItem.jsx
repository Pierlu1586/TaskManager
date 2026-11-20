import StatusBadge from "./StatusBadge"

function TaskItem({activity, updateStatus, startEditing, deleteActivity, showPriorityActivity}){
    return (
        <div className="task-card">
            <div className="task-card-header">
            <h3>{activity.titolo}</h3>
            <div className="task-card-priority-status">
            <span>{showPriorityActivity(activity.priorita)}</span>
            <span><StatusBadge status={activity.stato}/></span>
            </div>
            </div>

            <div className="task-card-action">

  <label htmlFor="status-card">Stato: </label>
          <select id="status-card" name="status-card" value={activity.stato} onChange={(event) => updateStatus(activity.id, event.target.value)}>
          <option value="todo">Da fare</option>
          <option value="pending">In corso</option>
          <option value="completed">Completata</option>
          </select>

            <button onClick={() => startEditing(activity)}>Modifica</button>
            <button onClick={() => deleteActivity(activity.id)}>Rimuovi</button>
            </div>
        </div>
    )
}

export default TaskItem