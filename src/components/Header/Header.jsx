import style from "./header.module.scss";
import React from "react";

const Header = () => {
    return (
        <h1 className={style.mainTitle}>To-do list</h1>
    )
}

export default Header;