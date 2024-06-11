import "./TodoItem.css";

const TodoItem = ({ id, content, isDone, createdDate, onDelete, onUpdate }) => {
    const onClickDelete = () => {
        onDelete(id);
    }
    const onChangeCheckbox = () => {
        onUpdate(id);
    };
    return (
        <div className="TodoItem">
            <div className="checkbox_col">
                {id}
                <input type="checkbox" checked={isDone} onChange={onChangeCheckbox} />
            </div>
            <div className="title_col">{content}</div>
            <div className="data_col">
                {new Date(createdDate).toLocaleDateString()}
            </div>
            <div className="btn_col">
                <button onClick={onClickDelete}>삭제</button>
            </div>
        </div>
    );
};

export default TodoItem;