import { useState } from "react";

export const CreatedTodo = ({ todo, setTodo }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addTodo = () => {
    fetch("http://localhost:8000/todo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: title, description: description }),
    })
      .then(async (res) => {
        const data = await res.json();
        setTodo([...todo, data.createdTodo])
        console.log("Todo added");
      })
      .catch((err) => {
        console.log(err);
        console.log("Error while adding todo");
      });
  };

  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        placeholder="title"
      />
      <input
        type="text"
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        placeholder="description"
      />
      <button onClick={addTodo}>Add todo</button>
    </div>
  );
};
