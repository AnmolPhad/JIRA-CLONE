import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login/Login";

function Dashboard() {
  return <h1>Dashboard Page</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;