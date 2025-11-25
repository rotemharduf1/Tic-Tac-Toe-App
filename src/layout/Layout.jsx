import Sidebar from "../components/SideBar";
import { Outlet } from "react-router-dom";
import "./Layout.css";

export default function Layout() {
    return (
        <div className="layout">
            <Sidebar />

            <main className="layout__content">
                <Outlet />
            </main>
        </div>
    );
}
