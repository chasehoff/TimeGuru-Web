import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import NewItem from '../columnItem/NewItem';
import './index.css'

function ActionButton({listID, listTitle}) {
    const [newOpen, setNewOpen] = useState(false);
    
    return (
        <div>
            <div className="action__button__container" onClick={() => setNewOpen(true)}>
                <AddIcon />
                <p>Add card</p>
            </div>
        <NewItem listTitle={listTitle} listID={listID} open={newOpen} handleClose={()=> setNewOpen(false)}/>
        </div>

    )
}

export default ActionButton;
