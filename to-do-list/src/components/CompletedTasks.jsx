import React from 'react'

export const CompletedTasks = ({completedTasks}) => {
    return (
        <div className='completedTasks'>
            <h2>Completed Tasks :</h2>
            <ul>
                {completedTasks.map((task)=> <li key={task}>{task}</li>)}
            </ul>
        </div>
    )
};
