import { Link } from "react-router-dom";
import "./SideBar.css";

export default function Sidebar() {
    return (
        <aside className="sidebar">
            <Link to="/tictactoe" className="sidebar__link">
                Tic-Tac-Toe
            </Link>
            <Link to="/todos" className="sidebar__link">
                To Do List
            </Link>
        </aside>
    );
}
