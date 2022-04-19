import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import RandomNumbers from "./components/RandomNumbers";
import Toast from "./components/Toast";
import TodoList from "./components/TodoList";
import ThemeContextProvider from "./context/ThemeContext";
import UserContextProvider from "./context/UserContext";
import { Todo } from "./model/model";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          todo,
          isDone: false,
        },
      ]);
      setTodo(" ");
    }
  };

  return (
    <ThemeContextProvider>
      <UserContextProvider>
        <div className="App">
          <header className="App-header">
            <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
            <TodoList todos={todos} setTodos={setTodos} />
            <RandomNumbers value={2} isPositive /> {/* restricting props */}
            <Toast position="center" />
            {/* template literals and exclusde types */}
          </header>
        </div>
      </UserContextProvider>
    </ThemeContextProvider>
  );
};

export default App;
