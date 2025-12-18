import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./layout/Layout";
import TicTacToePage from "./pages/TicTacToeGame/TicTacToePage";
import ToDoPage from "./pages/ToDoPage/ToDoPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate to="/tictactoe" replace />} />
          <Route path="/tictactoe" element={<TicTacToePage />} />
          <Route path="/todos" element={<ToDoPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
