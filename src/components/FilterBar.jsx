function FilterBar({filterStatus, setFilterStatus, filterPriority, setFilterPriority}){
    return(
        <>
        <div>
            <label htmlFor="filterStatus">Filtra per stato:</label>
             <select id="filterStatus" name="filterStatus" value={filterStatus} onChange={(event) => setFilterStatus(event.target.value)}>
          <option value="all">Tutti</option>
          <option value="todo">Da fare</option>
          <option value="pending">In corso</option>
          <option value="completed">Completata</option>
      </select>
        </div>

 <div>
    <label htmlFor="filterPriority">Filtra per priorità:</label>
       <select id="filterPriority" name="filterPriority" value={filterPriority} onChange={(event) => setFilterPriority(event.target.value)}>
          <option value="all">Tutte</option>
          <option value="high">Alta</option>
          <option value="medium">Media</option>
          <option value="low">Bassa</option>
      </select>  
 </div>
        </>
    )
}

export default FilterBar