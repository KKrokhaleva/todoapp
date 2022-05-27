import { Component } from "react";
import { TodoItem } from "../../PresentationComponents/TodoItem/TodoItem";
import './TodoList.css';
import {MainArea} from "../../PresentationComponents/MainArea/MainArea";


export class TodoList extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        list: [
            {id: 1, title: "Water Plants", description:"on the kitchen, dining room and first floor.", completed: false, history:""},
            {id: 2, title: "Pack the bags",description:"preparation for trip to London", completed: false, history:""},
            {id: 3, title: "Charge laptop",description:"preparation for trip to London", completed: false, history:""},
            {id: 4, title: "Post homeworks to Hillel Courses",description:"React Group from 30.04.2022", completed: false, history:""},
            {id: 5, title: "Make backup of HDD",description:"Use TimeMachine for that", completed: false,history:""},
        ],
        history: [
            {  field: '',
                action: '',
                prevValue: '',
                currentValue: '',
                appliedAt: ''
            }
        ]
    };

    onItemCompleteHandler = (id) => {
        const item = this.state.list.find((todoItem) => todoItem.id === id);
        const updatedItem = {...item, completed: !item.completed};

        this.setState({
            list: this.state.list.map((todoItem) => todoItem.id === id ? updatedItem : todoItem),
        });
    }

    onItemDeleteHandler = (id) => {
        this.setState({
            list: this.state.list.filter((todoItem) => todoItem.id !== id),
        });
    }

    render() {
        return (
            <div className="TodoList">
                <ul>
                    {this.state.list.map((todoItem) =>
                        <TodoItem
                            item={todoItem}
                            key={todoItem.id}
                            getCurrentTodo={this.props.getCurrentTodo}
                            onItemComplete={this.onItemCompleteHandler}
                            onItemDelete={this.onItemDeleteHandler}
                        />
                    )}
                </ul>
            </div>
        );
    }
}