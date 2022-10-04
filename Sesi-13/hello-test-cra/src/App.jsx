/* eslint-disable import/no-anonymous-default-export */
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import React from "react";
import Home from './pages/Home';
import Users from './pages/Users';

export default () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </Router>
  )
}