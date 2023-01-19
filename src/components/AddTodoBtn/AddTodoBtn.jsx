import style from "./addTodoBtn.module.scss";
import React from "react";

const AddTodoBtn = (props) => {

    return (
        <span className={style.btn} onClick={props.onPopupOpen}>+</span>
    )
}

export default AddTodoBtn;