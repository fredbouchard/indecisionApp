import React from 'react';

export default props => (
    <div>
        <li>{props.optionText}</li>
        <button 
            onClick={e => {
                props.onDeleteOption(props.optionText)
                }}>
            Remove
        </button>
    </div>
)    