import React from 'react';

export default props =>  (
    <button 
        onClick={props.onRandomPick}
        disabled={!props.hasOptions}>What should I do</button>
);