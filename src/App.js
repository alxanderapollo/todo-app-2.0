import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import { TodoProvider } from "./Context/TodoContext";
import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";
function App() {
  return (
    <TodoProvider>
      <Header />
      <div className="container">
        <TodoForm />
        <TodoList />
      </div>
    </TodoProvider>
  );
}

export default App;
