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
    const [isTextareaEmpty, setIsTextareaEmpty] = useState(false); /*проверка на пустоту textarea при написании to-do*/

    // Добавление нового to-do в массив
    const onBtnClick = () => {
        if (inputValue !== "") {
            setTodo([...todo, {id: todo.length + 1, title: inputValue, creatingTime: new Date(), isDone: false}])
            setIsPopupActive(false)
            setInputValue("")
            setIsTextareaEmpty(false);
        } else {
            setIsTextareaEmpty(true);
        }
    }


    // Открытие popup
    const onPopupOpen = () => {
        setIsPopupActive(true);
    }

    // Закрытие popup
    const onPopupClose = () => {
        setIsPopupActive(false);
    }

    // Удаление to-do из массива
    const removeTodo = (id) => {
        setTodo(prevState => prevState.filter(el => el.id !== id))
    }

    const checkboxClick = (id) => {
        setTodo(prevState => {
            let items = prevState.filter(el => el.id !== id)
            let item = prevState.find(el => el.id === id)
            item.isDone = !item.isDone
            items.push(item)
            return items
        });
    }



    return (
        <div className={isPopupActive ? style.mainWrapLayout : style.mainWrap}>

            <Header/>

            {todo.length === 0 ? <NoTodoText/> :
                <ul className={style.todoList}>
                    {todo.map(item =>
                        <TodoList key={item.id} {...item} removeTodo={removeTodo} checkboxClick={checkboxClick}/>
                    )}
                </ul>
            }

            <AddTodoBtn onPopupOpen={onPopupOpen}/>

            <Form inputValue={inputValue} setInputValue={setInputValue} onBtnClick={onBtnClick} isActive={isPopupActive}
                  onPopupClose={onPopupClose} isEmpty={isTextareaEmpty}/>
        </div>
    )
}

export default App;
