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

    const addItemToList = () => {
       return toDoList.map((listItem) => {
          const newListItem = <li className={listBackground()} key={listItem}>{listItem}</li>
          const tick = <button className='complete' onClick={()=>{taskCompleted(listItem)}}>✔</button> 
          const cross = <button className='remove' onClick={()=>{removeItem(listItem)}}>X</button> 
            
          return [newListItem, tick, cross] 
       })
    }
    return (
        <div className='toDoBox'>
            <h2 className='toDoTitle'>To-Do :</h2>
            <ul className='toDoList'>
                {addItemToList()}
            </ul>
        </div>
    )
};
