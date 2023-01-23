import style from "./form.module.scss";
import React, {useState} from "react";

const Form = (props) => {

    const onChangeInput = (e) => {
        props.setInputValue(e.currentTarget.value);
    }

    return (
        <div className={props.isActive ? style.formWrapActive : style.formWrap}>
            <button type={"button"} className={style.closeBtn} onClick={props.onPopupClose}>
                <svg fill="#000000" width="30px" height="30px" viewBox="-8.5 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.48 16l5.84-5.84c0.32-0.32 0.32-0.84 0-1.2-0.32-0.32-0.84-0.32-1.2 0l-5.84 5.84-5.84-5.84c-0.32-0.32-0.84-0.32-1.2 0-0.32 0.32-0.32 0.84 0 1.2l5.84 5.84-5.84 5.84c-0.32 0.32-0.32 0.84 0 1.2 0.16 0.16 0.4 0.24 0.6 0.24s0.44-0.080 0.6-0.24l5.84-5.84 5.84 5.84c0.16 0.16 0.36 0.24 0.6 0.24 0.2 0 0.44-0.080 0.6-0.24 0.32-0.32 0.32-0.84 0-1.2l-5.84-5.84z"></path>
                </svg>
            </button>
            <h2>Here you can add your task</h2>
            <textarea className={style.textarea} placeholder={"write your to-do"} value={props.inputValue} onChange={onChangeInput}/>
            <p className={props.isEmpty ? style.errorEmpty_active : style.errorEmpty}>The field is empty</p>
            <button className={style.addBtn} onClick={props.onBtnClick}>add to-do</button>
        </div>
    )
}

export default Form;