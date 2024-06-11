import "./TodoList.css";
import TodoItem from "./TodoItem";
import { useMemo, useState } from "react";

const TodoList = ({todo, onDelete, onUpdate}) => {
    const [search, setSearch] = useState("");
    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    };
    const getSearchResult = () => {
        return search === ""
        ? todo
        : todo.filter((it) =>
            it.content.toLowerCase().includes(search.toLowerCase())
        );
    };


    
    return (
        <div className="TodoList">
            <h4>Todo List 🌱</h4>
            <input className="searchbar" placeholder="검색어를 입력하세요" valuse={search} onChange={onChangeSearch} />
            <div className="list_wrapper">
                {todo.fliter((it) => it.content.toLowerCase().includes(search.toLowerCase)).map((it) => <TodoItem key = {it.id} {...it} onDelete={onDelete} /> )}
            </div>
        </div>
    );
};

export default TodoList;