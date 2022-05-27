import { Component } from "react";
import './TodoForm.css';


export class TodoForm extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        todoItem: {
            title: '',
            description: ''
        }
    };
    

    onFormSubmitHandler = (event) => {
        event.preventDefault();
        const newItem = {...this.state.todoItem, id: 10, completed: false};
        this.props.onTodoAdd(newItem);
    }

    onTitleChangeHandler = ({target}) => {
        this.setState({todoItem: {...this.state.todoItem, title: target.value}});
    }

    render() {
        return (
            <form className="TodoForm" onSubmit={this.onFormSubmitHandler}>
                <h1 className="TodoFormHeader">Todos</h1>
                <input className="TodoFormInput" type="text" placeholder="Search"></input>
            </form>
        );
    }
}