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
    let background = 'black';
    const listBackground = () => {
        if (background === 'black') {
            background = 'white';
            return 'blackItem';
        } else {
            background = 'black';
            return 'whiteItem'
        };
    };

    return (
        <div>
            <ol className='toDoList'> <span className='toDoTitle'>To-Do:</span> <p></p>
                {toDoList.map((listItem)=> <li className={listBackground()} key={listItem}>{listItem} <button className='complete' onClick={()=>{taskCompleted(listItem)}}>✔</button> <button className='remove' onClick={()=>{removeItem(listItem)}}>X</button></li>)}
            </ol>
        </div>
    )
};
