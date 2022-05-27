import './TodoItem.css';

const getCompletionStatus = status => status ? 'completed' : 'default';

export function TodoItem(props) {

    return (
        <div className="todo-item" onClick={() => props.getCurrentTodo(props.item)}>
            <span className="todo-item-complete" onClick={() => props.onItemComplete(props.item.id)}>{props.item.completed ? '✔' : ''}️</span>
            <div className="todo-item-wrapper">
                <span className={getCompletionStatus(props.item.completed)} id={'item-tittle'}>{props.item.title}</span>
                <span className={getCompletionStatus(props.item.completed)} id={'item-description'}>{props.item.description}</span>
            </div>

            <span onClick={() => props.onItemDelete(props.item.id)}>❌</span>
        </div>
    );
}
