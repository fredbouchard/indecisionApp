import React from 'react';

const CTA = props => { 
    return (
        <button 
            onClick={props.onRandomPick}
            disabled={!props.hasOptions}>What should I do</button>
    )
};

export default CTA;