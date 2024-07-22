import { useState } from 'react';
import './App.css';

function App() {
  const [todoList, setTodoList] = useState([]);

  function addNewTodo() {
    setTodoList([...todoList, {
      title: "new Todo", 
      description: "new Description", 
      done: false
    }]);

    // setTodoList(list);
  }

  return (
    <div>
      <button onClick={addNewTodo}>Add new todo</button>
      {
        todoList.map((todo, i) => {
          return (<Todo key={i} todo={todo} />);
        })
      }
    </div>
  )
}

function Todo(props) {
  const {title, description, done} = props.todo;
  return (
    <div>
      <p>title: {title}</p>
      <p>description: {description}</p>
      <p>done: {!done ? (<div>Not Done</div>) : (<div>Done</div>)}</p>
    </div>
  )
}

export default App
