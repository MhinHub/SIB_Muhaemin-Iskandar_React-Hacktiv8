/* eslint-disable import/no-anonymous-default-export */
import { Route, Routes } from "react-router-dom"
import React from "react";
import Home from './pages/Home';
import Users from './pages/Users';

export default () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users" element={<Users />} />
    </Routes>
  )
}