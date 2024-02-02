import React from "react";
import "./App.css";
import Todo from "./pages/Todo/Todo";
import { todoItems } from "./data/todoItems";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="border border-solid border-black rounded-3xl mx-auto my-10 p-10 w-1/2">
        <Todo items={todoItems} />
      </div>
    
    </BrowserRouter> 
    
  );
}

export default App;
