import React from "react";
import Home from "./pages/Home"
import TodoListApp from './pages/Todo/TodoListApp'
import { BrowserRouter as Router , Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/todo" element={<TodoListApp />} exact />
      </Routes>
    </Router>
  );
}

export default App;
