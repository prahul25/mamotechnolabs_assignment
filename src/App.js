import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ProjectProvider } from "./contexts/ProjectContext";
import NavBar from "./components/NavBar";
import Dashboard from "./pages/Dashboard";
import Browse from "./pages/Browse";

function App() {
  return (
    <ProjectProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/browse" element={<Browse />} />
        </Routes>
      </Router>
    </ProjectProvider>
  );
}

export default App;
