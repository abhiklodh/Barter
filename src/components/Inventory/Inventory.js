//Haven't tested any of this but it should be legit

//The a list component for each item in user inventory
// expected props:
/*
    Refactor/f-replace from here as needed
    .inventory (list)
    .title
    .description
    callbacks with index reference
    .handler1
    .handler2
    .handler3
*/
import React from 'react';
import InventoryItem from './InventoryItem/InventoryItem';

import classes from './Inventory.css';

const inventory = (props) => {

   
   
    const inventoryItems = (
        props.inventory.map(item => (
            <InventoryItem key={item.id}
                img={item.imageURL}
                name={item.itemName}
                desc={item.desc}
                clicked={() => props.editItemHandler(item.id)}
            />
        ))
    )
    
    return (
        <div className={classes.Inventory}>
            {inventoryItems}

        </div>
        
    )
}
    
    
export default inventory;
