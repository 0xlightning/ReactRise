import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodos, completeTodos } from "../redux/reducer";
import TodoItem from "./TodoItem";

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
    completeTodo: (id) => dispatch(completeTodos(id)),
  };
};

const ButtonTags = (props) => {
  const [sort, setSort] = useState("all");
  
  function activeTab(Id){
    setSort(Id)
     let vals = ["all","active","completed"];
     vals.map((x) => {
         if(x === Id){
             document.getElementById(x).className="active"; 
         }else{
             document.getElementById(x).className="";
         };
     })
  }
  return (
    <div className="button-tags">
      <ul className="list-tags">
        <li id="all" className="active" onClick={() => activeTab("all")}> All </li>
        <li id="active" onClick={() => activeTab("active")}>Active</li>
        <li id="completed" onClick={() => activeTab("completed")}> Completed </li>
      </ul>
        {props.todos.length > 0 && sort === "all"
            ? props.todos.map((item) => {
                return (
                  <TodoItem key={item.id} item={item} completeTodo={props.completeTodo} />
                );
              })
            : null}
          {props.todos.length > 0 && sort === "active"
            ? props.todos.map((item) => {
                return (
                  item.completed === false && (
                    <TodoItem key={item.id} item={item} completeTodo={props.completeTodo} />
                  )
                );
              })
            : null}
          {props.todos.length > 0 && sort === "completed"
            ? props.todos.map((item) => {
                return (
                  item.completed === true && (
                    <TodoItem key={item.id} item={item} completeTodo={props.completeTodo} />
                  )
                );
              })
            : null}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ButtonTags);
