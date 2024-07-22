import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  const [id, setId] = useState(1);

  return (
    <div>
      <button onClick={() => setId(1)}>1</button>
      <button onClick={() => setId(2)}>2</button>
      <button onClick={() => setId(3)}>3</button>
      <button onClick={() => setId(4)}>4</button>
      <button onClick={() => setId(5)}>5</button>

      <Todo id={id} />
    </div>
  )
}

function Todo({id}) {
  const [todo, setTodo] = useState({});

  useEffect(() => {
    axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
    .then((res) => {
      setTodo(res.data.todo)
    })
    .catch((err) => {
      console.log("Error while fetching data");
    })
  }, [id])

  return (
    <div>
      <h2>{todo.title}</h2>
      <h5>{todo.description}</h5>
    </div>
  )
}

export default App
