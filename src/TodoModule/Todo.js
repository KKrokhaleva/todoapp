import { Component } from "react";
import { TodoForm } from './ContainerComponents/TodoForm/TodoForm';
import { TodoList } from './ContainerComponents/TodoList/TodoList';
import {TodoSearch} from "./ContainerComponents/TodoSearch/TodoSearch";
import {MainArea} from "./PresentationComponents/MainArea/MainArea";
import './Todo.css';
import './PresentationComponents/MainArea/MainArea.css';


export class Todo extends Component {
    constructor(props) {
        super(props);
    }
    state = {};

    getCurrentTodo = (todo) => {
        this.setState(todo)
    }
    onTodoAddHandler = (newItem) => {
        console.log(newItem);    }

    render() {
        return (
            <>
                <div className="LeftSidebar">
                    <TodoForm
                        onTodoAdd={this.onTodoAddHandler}
                        />
                    <TodoList getCurrentTodo={this.getCurrentTodo} />
                    <TodoSearch/>
                </div>
                <MainArea
                    currentTodo={this.state}
                />
            </>
        );
    }
}
