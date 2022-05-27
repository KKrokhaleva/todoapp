import {Component} from "react";
import './MainArea.css';

export class MainArea extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        
        return (
            <div className={'description-wrapper'}>
                {
                    this.props.currentTodo.title ?
                        <>
                            <h2 className={"main-area-header"}>
                                {this.props.currentTodo.title}
                            </h2>
                            <textarea  value={this.props.currentTodo.description} className={"main-area-description"}/>
                            <h2 className={"history"}>History</h2>
                            <div className={"history-wrapper"}>
                                <p className={"history-name"}>Changed task description from “React Group 30.04.2022” to “React Group from 30.04.2022 (every Saturday)”</p>
                                <p className={"history-date"}>Monday, 16 May 2022 at 1:24 pm</p>
                            </div>
                            <div className={"history-wrapper"}>
                                <p className={"history-name"}>Created task with title “Post homeworks to Hillel Course”</p>
                                <p className={"history-date"}>Monday, 16 May 2022 at 12:59 pm</p>
                            </div>
                        </>
                        :
                        <h1 className={"ns"}>Nothing Selected</h1>
                }
            </div>
        )
    }
}