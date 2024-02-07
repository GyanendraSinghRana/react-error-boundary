import React from "react";
import "./App.css";
import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Todo from "./pages/Todo/Todo";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Navigate to='/todo' />} />
        <Route path='/todo' element={<Todo />} />
        {/* <Route path='/discord' element={<Todo items={todoItems}/>} /> */}
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
