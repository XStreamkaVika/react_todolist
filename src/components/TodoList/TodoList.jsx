import style from "./todolist.module.scss";
import React, {useEffect, useState} from "react";

const TodoList = (props) => {

    let currentTime = props.creatingTime;
    let showDate = String(currentTime.getDate()) + "." + String(currentTime.getMonth() + 1) + "." + String(currentTime.getFullYear());
    let showTime = currentTime.getHours() + "." + currentTime.getMinutes();



    return (
        <>
            <li className={style.todoItem}>
                <div className={style.leftPart}>
                    <input type="checkbox" className={style.checkbox} id={"customCheckbox" + props.id} onClick={() => props.checkboxClick(props.id)}/>
                    <label htmlFor={"customCheckbox" + props.id} className={style.label}></label>
                    <p className={props.isDone ? style.taskNameDone : ""}>{props.title}</p>
                </div>
                <button type={'button'} className={style.deleteBtn} onClick={() => props.removeTodo(props.id)}>
                    <svg fill="#000" width="20px" height="20px" viewBox="-8.5 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.48 16l5.84-5.84c0.32-0.32 0.32-0.84 0-1.2-0.32-0.32-0.84-0.32-1.2 0l-5.84 5.84-5.84-5.84c-0.32-0.32-0.84-0.32-1.2 0-0.32 0.32-0.32 0.84 0 1.2l5.84 5.84-5.84 5.84c-0.32 0.32-0.32 0.84 0 1.2 0.16 0.16 0.4 0.24 0.6 0.24s0.44-0.080 0.6-0.24l5.84-5.84 5.84 5.84c0.16 0.16 0.36 0.24 0.6 0.24 0.2 0 0.44-0.080 0.6-0.24 0.32-0.32 0.32-0.84 0-1.2l-5.84-5.84z"></path>
                    </svg>
                </button>
                <p className={style.creatingTime}>{"Time of creating:" +  " " + showDate + " " + "at" +  " " + showTime}</p>
            </li>
        </>
    )
}



export default TodoList;