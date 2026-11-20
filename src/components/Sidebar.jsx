import { NavLink } from "react-router"

function Sidebar({resetForm}){
    return(
        <aside className="sidebar">
            <NavLink to="/" end className={({isActive}) => isActive ? "active" : ""}>Dashboard</NavLink>
            <NavLink to="/tasks" end className={({isActive}) => isActive ? "active" : ""}>Attività</NavLink>
            <NavLink to="/tasks/new" onClick={resetForm} end className={({isActive}) => isActive ? "active" : ""}>Nuova attività</NavLink>
        </aside>
    )
}

export default Sidebar

