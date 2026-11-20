import Sidebar from "./Sidebar"
import { Outlet } from "react-router"

function Layout({resetForm}){
    return (
        <div className="app-layout">
        <Sidebar resetForm={resetForm}/>
        <main className="main-content">

        <Outlet/>
        </main>
        </div>
    )
}

export default Layout