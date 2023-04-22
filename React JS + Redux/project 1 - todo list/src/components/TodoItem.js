import React from "react";

const TodoList = (props) => {
  const { item, completeTodo } = props;

  return (
    <li key={item.id} className="todo-line">
      {item.completed === false && (   
        <div className="flx2 box">
          <input type="checkbox" onClick={() => completeTodo(item.id)}/>
          <p>{item.item}</p>
        </div>
      )}
      {item.completed && <div className="flx2 box">
        <input type="checkbox" checked onClick={() => completeTodo(item.id)} />
        <p><del>{item.item}</del></p>
      </div>}
    </li>
  );
};

export default TodoList;