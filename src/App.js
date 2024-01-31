import "./App.css";
import Todo from "./Todo";
import { items } from "./todoItems";

function App() {
  return (
    <div className="App">
      <Todo items={items} />
    </div>
  );
}

export default App;
