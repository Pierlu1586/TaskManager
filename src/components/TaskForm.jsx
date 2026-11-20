function TaskForm({handleSubmit,setTitle, setPriority, setStatus, editingId, title, priority, status}) {
    return (
        <div>
      <form onSubmit={handleSubmit}>
        {/* FORM INPUT TITOLO */}
        <label htmlFor="title">Titolo attività:</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        {/* FORM SELECT PRIORITÀ */}
        <label htmlFor="priority">Priorità:</label>
        <select
          id="priority"
          name="priority"
          value={priority}
          onChange={(event) => setPriority(event.target.value)}
        >
          <option value="">Seleziona una priorità</option>
          <option value="high">Alta</option>
          <option value="medium">Media</option>
          <option value="low">Bassa</option>
        </select>

        {/* FORM SELECT STATO */}
        <label htmlFor="status">Stato:</label>
        <select
          id="status"
          name="status"
          value={status}
          onChange={(event) => setStatus(event.target.value)}
        >
          <option value="">Seleziona uno stato</option>
          <option value="todo">Da fare</option>
          <option value="pending">In corso</option>
          <option value="completed">Completata</option>
        </select>

        <button type="submit">{editingId !== null ? "Modifica attività" : "Salva attività"}</button>
      </form>
      </div>
    )
}

export default TaskForm