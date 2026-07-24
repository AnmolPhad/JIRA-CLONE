import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";

import Hero from "./Components/Main/Hero";

import Board from "./Components/Board/Board";
import ProjectSettings from "./Components/ProjectSettings/ProjectSettings";
import UserSettings from "./Components/UserSettings/UserSettings";

// NEW
import IssueView from "./Components/IssueView/IssueView";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Authentication */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Project */}
        <Route path="/project" element={<Hero />}>
          {/* Kanban Board */}
          <Route index element={<Board />} />

          {/* Issue Details */}
          <Route
            path="issue/:id"
            element={<IssueView />}
          />

          {/* Project Settings */}
          <Route
            path="settings"
            element={<ProjectSettings />}
          />

          {/* User Settings */}
          <Route
            path="user-settings"
            element={<UserSettings />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;