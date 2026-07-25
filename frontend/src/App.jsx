import { BrowserRouter, Routes, Route } from "react-router-dom";

// Authentication
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import ProtectedRoute from "./Components/auth/ProtectedRoute";

// Project Layout
import Hero from "./layouts/ProjectLayout";

// Project Pages
import Dashboard from "./pages/project/Dashboard";
import Members from "./pages/project/Members";
import Reports from "./pages/project/Reports";
import Profile from "./pages/project/Profile";
import ProjectSettings from "./pages/project/ProjectSettings";
import UserSettings from "./pages/project/UserSettings";



// Existing Components
import Board from "./Components/Board/Board";
import IssueView from "./Components/IssueView/IssueView";

// Admin Layout
import AdminLayout from "./layouts/AdminLayout";

// Admin Pages
import AdminDashboard from "./pages/admin/Dashboard";
import Projects from "./pages/admin/Projects";
import ProjectDetails from "./pages/admin/ProjectDetails";
import CreateProject from "./pages/admin/CreateProject";
import EditProject from "./pages/admin/EditProject";
import Users from "./pages/admin/Users";
import UserDetails from "./pages/admin/UserDetails";
import CreateUser from "./pages/admin/CreateUser";
import EditUser from "./pages/admin/EditUser";
import AdminReports from "./pages/admin/Reports";
import ActivityLogs from "./pages/admin/ActivityLogs";
import SystemSettings from "./pages/admin/SystemSettings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Authentication */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* ================= PROJECT MODULE ================= */}

        <Route
          path="/project"
          element={
            <ProtectedRoute>
              <Hero />
            </ProtectedRoute>
          }
        >
          {/* Dashboard */}
          <Route path="dashboard" element={<Dashboard />} />

          {/* Kanban */}
          <Route index element={<Board />} />
          <Route path="board" element={<Board />} />

          {/* Issues */}
          <Route path="issue/:id" element={<IssueView />} />

          {/* Members */}
          <Route path="members" element={<Members />} />

          {/* Reports */}
          <Route path="reports" element={<Reports />} />

          {/* Settings */}
          <Route path="settings" element={<ProjectSettings />} />
          <Route path="user-settings" element={<UserSettings />} />

          {/* Profile */}
          <Route path="profile" element={<Profile />} />
        </Route>

        {/* ================= ADMIN MODULE ================= */}

        <Route
          path="/admin"
          element={
            <ProtectedRoute role="ADMIN">
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<AdminDashboard />} />
          <Route path="dashboard" element={<AdminDashboard />} />

          <Route path="projects" element={<Projects />} />
          <Route path="projects/create" element={<CreateProject />} />
          <Route path="projects/:id" element={<ProjectDetails />} />
          <Route path="projects/edit/:id" element={<EditProject />} />

          <Route path="users" element={<Users />} />
          <Route path="users/create" element={<CreateUser />} />
          <Route path="users/:id" element={<UserDetails />} />
          <Route path="users/edit/:id" element={<EditUser />} />

          <Route path="reports" element={<AdminReports />} />
          <Route path="activity-logs" element={<ActivityLogs />} />
          <Route path="settings" element={<SystemSettings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
