import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Hero from "./Components/Main/Hero";


function Dashboard() {
  return <h1>Dashboard Page</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/hero" element={<Hero />} />
       


      </Routes>
    </BrowserRouter>
  );
}

export default App;