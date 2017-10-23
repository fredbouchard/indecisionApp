import React from 'react';

const Option = props => (  
    <li>{props.ordinate}. {props.optionText}
        <button 
            className='Button Button-link'
            onClick={e => {
                props.onDeleteOption(props.optionText)
                }}>
            Remove
        </button>
    </li>  
);

export default Option;