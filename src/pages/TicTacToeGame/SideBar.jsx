import { NavLink } from "react-router-dom";
import "./SideBar.css";

export default function Sidebar() {
    return (
        <aside className="sidebar">
        <NavLink to="/tictactoe"
            className={({ isActive }) => isActive ? "sidebar__link sidebar__link--active" : "sidebar__link"
            }>
            Tic-Tac-Toe
        </NavLink>

        <NavLink to="/todos"
            className={({ isActive }) => isActive ? "sidebar__link sidebar__link--active" : "sidebar__link"
            }>
            To Do List
        </NavLink>
        </aside>
    );
}
