import { useEffect, useState } from "react";
import { CreatedTodo } from "./components/CreateTodo";
import { Todo } from "./components/Todo";

function App() {

  const [todo, setTodo] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch("http://localhost:8000/todos")
    .then(async (res) => {
      const data = await res.json();
      setTodo(data.list);
    });
  };

  return (
    <div>
      <CreatedTodo todo={todo} setTodo={setTodo} />
      <div>
        <Todo todo={todo} />
      </div>
    </div>
  );
};

export default App;
