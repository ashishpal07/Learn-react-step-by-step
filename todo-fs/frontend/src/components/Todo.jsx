import React from "react";

export const Todo = ({ todo }) => {

  if (todo === null || todo === undefined) return;

  return (
    <div>
      {
        todo.map((t) => {
          return (
          <div key={t._id}>
            <p>title: {t.title}</p>
            <p>description: {t.description}</p>
            <p>completed: {t.completed ? "Done" : "Not Done"}</p>
          </div>
        )})
      }
    </div>
  );
};
