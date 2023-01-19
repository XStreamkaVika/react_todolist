import React, {useState} from "react";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import TodoList from "./components/TodoList/TodoList"
import style from './app.module.scss';
import NoTodoText from "./components/NoTodoText/NoTodoText";
import AddTodoBtn from "./components/AddTodoBtn/AddTodoBtn";


const App = () => {

    const [inputValue, setInputValue] = useState("");
    const [todo, setTodo] = useState([]);
    const [isPopupActive, setIsPopupActive] = useState(false); /*добавление активного класса для открытия popup*/

    // Добавление нового to-do в массив
    const onBtnClick = () => {
        setTodo([...todo, {id: todo.length + 1, title: inputValue}])
        setIsPopupActive(false)
        setInputValue("")
    }

    // Открытие popup
    const onPopupOpen = () => {
        setIsPopupActive(true);
    }

    // Закрытие popup
    const onPopupClose = () => {
        setIsPopupActive(false);
    }

    return (
        <div className={isPopupActive ? style.mainWrapLayout : style.mainWrap}>

            <Header/>

            {todo.length === 0 ? <NoTodoText/> :
                <ul className={style.todoList}>
                    {todo.map(item =>
                        <TodoList key={item.id} title={item.title}/>
                    )}
                </ul>
            }

            <AddTodoBtn onPopupOpen={onPopupOpen}/>

            <Form inputValue={inputValue} setInputValue={setInputValue} onBtnClick={onBtnClick} isActive={isPopupActive} onPopupClose={onPopupClose}/>
        </div>
    )
}

export default App;
