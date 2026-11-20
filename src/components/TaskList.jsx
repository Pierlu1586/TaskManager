import TaskItem from "./TaskItem"

function TaskList({activities, updateStatus, startEditing, deleteActivity, showPriorityActivity}){
    return(
        <div className="task-list">
        {activities.map((activity) => (
            <TaskItem key={activity.id} activity={activity} updateStatus={updateStatus} startEditing={startEditing} deleteActivity={deleteActivity}
            showPriorityActivity={showPriorityActivity}/>
        ))} 
</div>

        
        
    )
}

export default TaskList