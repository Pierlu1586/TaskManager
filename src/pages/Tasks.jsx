import FilterBar from "../components/FilterBar";
import SearchBar from "../components/SearchBar";
import TaskList from "../components/TaskList";

function Tasks({
  filteredActivities,
  filterTitle,
  setFilterTitle,
  filterStatus,
  setFilterStatus,
  filterPriority,
  setFilterPriority,
  updateStatus,
  showStatusActivity,
  showPriorityActivity,
  startEditing,
  deleteActivity
}) {
  return (
    <>
      <h3>Le mie attività</h3>
      <SearchBar filterTitle={filterTitle} setFilterTitle={setFilterTitle} />
      <FilterBar
        filterStatus={filterStatus}
        setFilterStatus={setFilterStatus}
        filterPriority={filterPriority}
        setFilterPriority={setFilterPriority}
      />
      <TaskList
        activities={filteredActivities}
        startEditing={startEditing}
        updateStatus={updateStatus}
        deleteActivity={deleteActivity}
        showStatusActivity={showStatusActivity}
        showPriorityActivity={showPriorityActivity}
      />
    </>
  );
}

export default Tasks;
