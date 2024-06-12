// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hero from "./Hero";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact Component={Hero}></Route>
      </Routes>
    </Router>
  );
}
