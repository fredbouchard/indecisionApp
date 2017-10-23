import React from 'react';

const CTA = props =>  (
    <div className='u-flex u-flex-center'>
        <button 
            className='Button Button-primary Button--xlarge'
            onClick={props.onRandomPick}
            disabled={!props.hasOptions}>What should I do?</button>
    </div>
);

export default CTA;