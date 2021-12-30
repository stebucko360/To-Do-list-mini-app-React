import React from 'react'

export const Mainlist = ({toDoList, addToDoList}) => {
    return (
        <div>
            <ol className='toDoList'>
                {toDoList.map((listItem)=> <li>{listItem} <button className='complete'>✔</button> <button className='remove'>X</button></li>)}
            </ol>
        </div>
    )
};
