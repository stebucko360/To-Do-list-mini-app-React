import React from 'react'

export const Mainlist = ({toDoList, addToDoList, addCompletedTasks}) => {

    const removeItem = (listItem)=>{
        addToDoList((currentList)=>{
            const indexToRemove = currentList.indexOf(`${listItem}`);
            const newArray = [...currentList];
            newArray.splice(indexToRemove, 1)
            return newArray
        });
    }; 

    const taskCompleted = (listItem) => {
        addCompletedTasks((currentList)=>{
            return [...currentList, listItem]
        });
        removeItem(listItem);
    };
    return (
        <div>
            <ol className='toDoList'> To-Do: <p></p>
                {toDoList.map((listItem)=> <li key={listItem}>{listItem} <button className='complete' onClick={()=>{taskCompleted(listItem)}}>✔</button> <button className='remove' onClick={()=>{removeItem(listItem)}}>X</button></li>)}
            </ol>
        </div>
    )
};
