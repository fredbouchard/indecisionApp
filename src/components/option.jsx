import React from 'react';

const Option = props => {
    return (
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
};

export default Option;