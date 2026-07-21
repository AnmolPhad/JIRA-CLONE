import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";

import Hero from "./Components/Main/Hero";

import Board from "./Components/Board/Board";
import ProjectSettings from "./Components/ProjectSettings/ProjectSettings";
import UserSettings from "./Components/UserSettings/UserSettings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/project" element={<Hero />}>
          <Route index element={<Board />} />
          <Route path="settings" element={<ProjectSettings />} />
          <Route path="user-settings" element={<UserSettings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;