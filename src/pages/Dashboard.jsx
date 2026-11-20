import Header from "../components/Header";
import Welcome from "../components/Welcome";
import StatCard from "../components/StatCard";

function Dashboard({ activities }) {
  const nomePagina = "La mia Dashboard";

  const completedCounter = activities.filter(
    (activity) => activity.stato === "completed",
  ).length;
 
  const todoCounter = activities.filter(
    (activity) => activity.stato === "todo",
  ).length;
 
  const pendingCounter = activities.filter(
    (activity) => activity.stato === "pending",
  ).length;
 

  return (
    <>
      <Header
        titolo={nomePagina}
        descrizione="Panoramica delle tue attività"
        utente="Pierluigi"
      />
      <Welcome />
    <div className="statsGrid">
      <StatCard title="Da fare" count={todoCounter} color="#ffedd5" />
      <StatCard title="In corso" count={pendingCounter} color="#dbeafe" />
      <StatCard title="Completate" count={completedCounter} color="#dcfce7" />
    </div>
    </>
  );
}

export default Dashboard;
