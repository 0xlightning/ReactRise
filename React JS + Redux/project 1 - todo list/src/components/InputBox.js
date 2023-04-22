import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodos } from "../redux/reducer";

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
  };
};

const InputBox = (props) => {
  const [todo, setTodo] = useState("");
  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const add = () => {
    if (todo === "") {
      return null;
    } else {
      props.addTodo({
        id: Math.floor(Math.random() * 1000),
        item: todo,
        completed: false,
      });
      setTodo("");
    }
  };
  return (
    <form className="container flx">
      <input type="text" onChange={(e) => handleChange(e)} className="input-box" value={todo} required/>
      <button className="add-btn" onClick={() => add()}>Add</button>
      <br />
    </form>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(InputBox);
