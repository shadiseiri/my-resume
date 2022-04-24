import React from "react";
import Home from "./pages/Home"
import TodoListApp from './pages/Todo/TodoListApp'
import SpaApp from './pages/Spa/SpaApp'
import ShoppingCartApp from "./pages/ShoppingCart/ShoppingCartApp";
import { BrowserRouter as Router , Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/todo" element={<TodoListApp />} exact />
        <Route path="/spa/*" element={<SpaApp />} exact />
        <Route path="/shoppingCart" element={<ShoppingCartApp />} exact />
      </Routes>
    </Router>
  );
}

export default App;
