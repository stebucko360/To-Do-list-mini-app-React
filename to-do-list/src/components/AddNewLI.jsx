import React from 'react'
import { useState } from 'react';

export const AddNewLI = ({addToDoList}) => {
    const [newItem, addNewItem] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        addToDoList((currList)=>{
            return [...currList, newItem]
        });
        addNewItem("")
    };

    return (
        <div>
           <form onSubmit={handleSubmit}>
               <label>
                   Add new item to list :
                   <input 
                   className="input"
                    value={newItem}
                    onChange={(event)=>{addNewItem(event.target.value)}}
                   >
                   </input>
               </label>
               <button type="submit">Add this item</button>
               </form> 
        </div>
    )
}
