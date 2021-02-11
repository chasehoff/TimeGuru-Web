import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import { useDispatch } from 'react-redux';
import './index.css';
import { addList } from '../../../../../../actions/types';
import { Tooltip } from '@material-ui/core';

function AddCategory() {
    const dispatch = useDispatch();
    const [category, setCategory] = useState("");

    const submitCategory = (category) => {
        dispatch(addList(category));
        setCategory("");
    }

    return (
        <div className="add__category__container">
            <input placeholder="Add category..." value={category} onChange={(e) => setCategory(e.target.value)} />
            <Tooltip title="Add category" placement="top">
                <AddIcon className="add__category__icon" onClick={() => submitCategory(category)} />
            </Tooltip>
            
        </div>
    )
}

export default AddCategory;
