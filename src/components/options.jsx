import React from 'react';
import Option from './option';

export default props => (
    <div>
        <button onClick={props.onDeleteOptions}>Remove All</button>              
        {props.options.length === 0 && <p>There's currently no options!</p>}
        {props.options.length >= 1 &&
        <ul>
            {
                props.options.map(
                    (option, index) => 
                        <Option 
                            key={option}
                            optionText={option}
                            onDeleteOption={props.onDeleteOption}/>
                    )
            }                
        </ul>}
    </div>
);