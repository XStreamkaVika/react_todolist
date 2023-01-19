import React from "react";
import style from "./noTodoText.module.scss";

const NoTodoText = () => {
    return (
        <p className={style.text}>You have no current tasks</p>
    )
}

export default NoTodoText;