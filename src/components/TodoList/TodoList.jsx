import style from "./todolist.module.scss";
import React from "react";

const TodoList = (props) => {

    return (
        <>
            <li className={style.todoItem}>
                <input type="checkbox"/>
                <p>{props.title}</p>
            </li>
        </>
    )
}



export default TodoList;