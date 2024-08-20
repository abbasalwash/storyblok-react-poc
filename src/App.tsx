import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Project from "./components/Project";
import Navigation from "./components/Navigation";

const App: React.FC = () => {
  return (
    <div className="container">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/projects/:slug" element={<Project />} />
      </Routes>
    </div>
  );
};

export default App;