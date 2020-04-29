import React from 'react';

export default class TaskList extends React.Component {
    render() {
        let taskComponents = [];
        this.props.tasks.forEach(task => taskComponents.push(<li className='TaskList__Task'>
            <input type='checkbox' defaultChecked={task.done} />
            {task.name}
            <a href='#' class='TaskList__Task--remove'></a>
        </li>));
        return (
            <div className='TaskList'>
                <ul>
                    {taskComponents}
                </ul>
            </div>
        )
    }
}