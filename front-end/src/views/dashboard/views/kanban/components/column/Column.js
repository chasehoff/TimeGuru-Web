import React from 'react';
import ActionButton from '../actionButton/ActionButton';
import ColumnItem from '../columnItem/ColumnItem';
import './index.css';

function Column({ title, cards }) {
    return (
        <div className="column__container">
            <div className="column__container__header">
                <h3>{title}</h3>
            </div>
            
            {
                cards.map(card => <ColumnItem  key={card.id} text={card.text} />)
            }
            <ActionButton />
        </div>
    )
}
export default Column;
