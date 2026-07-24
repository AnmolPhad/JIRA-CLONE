import { BrowserRouter, Routes, Route } from "react-router-dom";

// Authentication
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import ProtectedRoute from "./Components/auth/ProtectedRoute";

// Main Layout
import Hero from "./Components/Main/Hero";

// User Pages
import Board from "./Components/Board/Board";
import IssueView from "./Components/IssueView/IssueView";
import ProjectSettings from "./Components/ProjectSettings/ProjectSettings";
import UserSettings from "./Components/UserSettings/UserSettings";

// Admin Layout
import AdminLayout from "./layouts/AdminLayout";

// Admin Pages
import Dashboard from "./pages/admin/Dashboard";
import Projects from "./pages/admin/Projects";
import ProjectDetails from "./pages/admin/ProjectDetails";
import CreateProject from "./pages/admin/CreateProject";
import EditProject from "./pages/admin/EditProject";
import Users from "./pages/admin/Users";
import UserDetails from "./pages/admin/UserDetails";
import CreateUser from "./pages/admin/CreateUser";
import EditUser from "./pages/admin/EditUser";
import Reports from "./pages/admin/Reports";
import ActivityLogs from "./pages/admin/ActivityLogs";
import SystemSettings from "./pages/admin/SystemSettings";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Authentication */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* User Module */}
        <Route
          path="/project"
          element={
            <ProtectedRoute>
              <Hero />
            </ProtectedRoute>
          }
        >
          <Route index element={<Board />} />
          <Route path="issue/:id" element={<IssueView />} />
          <Route path="settings" element={<ProjectSettings />} />
          <Route path="user-settings" element={<UserSettings />} />
        </Route>

        {/* Admin Module */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute role="ADMIN">
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />

          <Route path="projects" element={<Projects />} />
          <Route path="projects/create" element={<CreateProject />} />
          <Route path="projects/:id" element={<ProjectDetails />} />
          <Route path="projects/edit/:id" element={<EditProject />} />

          <Route path="users" element={<Users />} />
          <Route path="users/create" element={<CreateUser />} />
          <Route path="users/:id" element={<UserDetails />} />
          <Route path="users/edit/:id" element={<EditUser />} />

          <Route path="reports" element={<Reports />} />
          <Route path="activity-logs" element={<ActivityLogs />} />
          <Route path="settings" element={<SystemSettings />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;