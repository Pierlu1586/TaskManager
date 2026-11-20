import TaskForm from "../components/TaskForm"

function TaskFormPage({handleSubmit, title, priority, status, setPriority, setTitle, setStatus, editingId}) {
    return(
        <>
        <h3>Nuova attività:</h3>
        <TaskForm  handleSubmit={handleSubmit}
        priority={priority}
        title={title}
        status={status}
        setPriority={setPriority}
        setTitle={setTitle}
        setStatus={setStatus}
        editingId={editingId}/>
        </>
    )
}

export default TaskFormPage
