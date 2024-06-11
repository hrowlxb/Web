import "./TodoEditor.css";
import { useState, useRef } from "react";

const TodoEditor = ({onCreate}) => {
    const inputRef = useRef();
    const [content, setContent] = useState("");
    const onSubmit = () => {
        if (content===""){
            inputRef.current.focus();
            return;
        }
        onCreate(content);
        setContent("");
    }
    const onChangeContent = (e) => {
        setContent(e.target.value);
    }
    const onKeyDown = (e) => {
        if(e.keyCode === 13){
            onSubmit();
        }
    }

    return (
        <div className="TodoEditor">
            <h4>새로운 Todo 작성하기 ✏️</h4>
            <div className="editor_wrapper">
                <input onKeyDown = {onKeyDown} ref = {inputRef} placeholder="새로운 Todo..." value={content} onChange={onChangeContent} />
                <button onClick={onSubmit}>추가</button>
            </div>
        </div>
    );
};

export default TodoEditor;