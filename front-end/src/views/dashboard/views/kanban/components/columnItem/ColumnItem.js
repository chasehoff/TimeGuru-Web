import React from 'react';
import './index.css';

function ColumnItem({text}) {
    return (
        <div className="column__item__container">
            <p>
                {text}
            </p>
        </div>
    )
}

export default ColumnItem;
