import { Component } from "react";
import './TodoSearch.css';


export class TodoSearch extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form className="form-create" onSubmit={this.onFormSubmitHandler}>
                <input className='create-input' type="text" placeholder="What you need to do?"></input>
                <span className="create-btn">+</span>
            </form>
        );
    }
}