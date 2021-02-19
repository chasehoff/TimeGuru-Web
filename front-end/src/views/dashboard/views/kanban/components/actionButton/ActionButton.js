import React, { useState } from 'react';
import NewItem from '../columnItem/NewItem';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { Tooltip } from '@material-ui/core';
import './index.css'

function ActionButton({listID, listTitle}) {
    const [newOpen, setNewOpen] = useState(false);
    
    return (
        <div>
            <div className="action__button__container" onClick={() => setNewOpen(true)}>
                <Tooltip placement="bottom" title="Add Card">
                    <AddCircleIcon />
                </Tooltip>
                
            </div>
        <NewItem listTitle={listTitle} listID={listID} open={newOpen} handleClose={()=> setNewOpen(false)}/>
        </div>

    )
}

export default ActionButton;
