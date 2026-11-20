import "./App.css";

import { useState, useEffect } from "react";
import { useNavigate, Routes, Route } from "react-router";

import Dashboard from "./pages/Dashboard";
import Layout from "./components/Layout";
import Tasks from "./pages/Tasks";
import TaskFormPage from "./pages/TaskFormPage";

function App() {
  
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("");
  const [status, setStatus] = useState("");

  const [activities, setActivities] = useState(() => {
    const datiSalvati = localStorage.getItem("activities");

    if (datiSalvati) {
      try {
        const parsed = JSON.parse(datiSalvati);
        if (Array.isArray(parsed)) {
          return parsed;
        }
      } catch (error) {
        console.error("Errore nel recupero delle attività:", error);
      }
    }

    return [
      {
        id: 1,
        titolo: "Studiare React",
        priorita: "high",
        stato: "todo",
      },
      {
        id: 2,
        titolo: "Ripassare Java",
        priorita: "low",
        stato: "todo",
      },
      {
        id: 3,
        titolo: "Studiare Angular JS",
        priorita: "medium",
        stato: "todo",
      },
      {
        id: 4,
        titolo: "Studiare Oracle DB",
        priorita: "medium",
        stato: "todo",
      },
    ];
  });
  /* STATO DI MODIFICA ATTIVITÀ */
  const [editingId, setEditingId] = useState(null);

  const [filterStatus, setFilterStatus] = useState("all");
  const [filterPriority, setFilterPriority] = useState("all");
  const [filterTitle, setFilterTitle] = useState("");

  useEffect(() => {
    document.title = `Task Manager`;
  }, []);

  useEffect(() => {
    localStorage.setItem("activities", JSON.stringify(activities));
  }, [activities]);

  function showStatusActivity(stateActivity) {
    switch (stateActivity) {
      case "todo":
        return "Da fare";
      case "pending":
        return "In corso";
      case "completed":
        return "Completata";
      default:
        return "Stato non riconosciuto.";
    }
  }

  function showPriorityActivity(priorityActivity) {
    switch (priorityActivity) {
      case "high":
        return "Alta";
      case "medium":
        return "Media";
      case "low":
        return "Bassa";
      default:
        return "Priorità non riconosciuta.";
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (title.trim() === "") {
      alert("Inserisci il titolo di una attività!");
      return;
    }
    if (priority === "") {
      alert("Inserisci la priorità dell'attività!");
      return;
    }
    if (status === "") {
      alert("Inserisci lo stato dell'attività!");
      return;
    }

    if (editingId !== null) {
      updateActivity(editingId, title, priority, status);
    } else {
      const nuovaAttivita = {
        id: crypto.randomUUID(),
        titolo: title.trim(),
        priorita: priority,
        stato: status,
      };
      setActivities((prev) => [...prev, nuovaAttivita]);
      
    }

    navigate("/tasks");
    resetForm();
  }

  function updateStatus(id, newState) {
    setActivities((prev) =>
      prev.map((activity) =>
        activity.id === id ? { ...activity, stato: newState } : activity,
      ),
    );
  }

  function startEditing(activity) {
    setEditingId(activity.id);
    setTitle(activity.titolo);
    setPriority(activity.priorita);
    setStatus(activity.stato);
    navigate('/tasks/new');
  }

  function updateActivity(id, title, priority, status) {
    setActivities((prev) =>
      prev.map((activity) =>
        activity.id === id
          ? {
              ...activity,
              titolo: title,
              priorita: priority,
              stato: status,
            }
          : activity,
      ),
    );
  }

  function deleteActivity(id) {
    const conferma = window.confirm(
      "Sei sicuro di voler rimuovere l'attività?",
    );
    if (!conferma) return;
    setActivities((prev) => prev.filter((activity) => activity.id !== id));
  }

  function resetForm(){
    setTitle("");
    setPriority("")
    setStatus("")
    setEditingId(null)
  }

  const filteredActivities = activities.filter((activity) => {
    const matchStatus =
      filterStatus === "all" || activity.stato === filterStatus;
    const matchPriority =
      filterPriority === "all" || activity.priorita === filterPriority;
    const matchText = activity.titolo
      .toLowerCase()
      .includes(filterTitle.toLowerCase());

    return matchStatus && matchPriority && matchText;
  });



  return (
   
      <Routes>
        <Route path="/" element={<Layout resetForm={resetForm} />} >
        
        <Route index element={<Dashboard  activities={activities}/>}/>
        
          <Route
          path="tasks"
          element={
            <Tasks
              filteredActivities={filteredActivities}
              filterTitle={filterTitle}
              filterPriority={filterPriority}
              filterStatus={filterStatus}
              setFilterTitle={setFilterTitle}
              setFilterPriority={setFilterPriority}
              setFilterStatus={setFilterStatus}
              updateStatus={updateStatus}
              showStatusActivity={showStatusActivity}
              showPriorityActivity={showPriorityActivity}
              startEditing={startEditing}
              deleteActivity={deleteActivity}
            />
          }
        />
        <Route
          path="tasks/new"
          element={
            <TaskFormPage
              title={title}
              priority={priority}
              status={status}
              editingId={editingId}
              setTitle={setTitle}
              setPriority={setPriority}
              setStatus={setStatus}
              handleSubmit={handleSubmit}
            />
          }
        />
        
        </Route>
      
      </Routes>

 


    

      

    
   
  );
}

export default App;
