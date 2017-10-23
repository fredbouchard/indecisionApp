import React from 'react';
import Option from './option';

const Options = props => (
    <div>
        <div className='Widget-header'>
             <h3>Your options</h3>              
        <button 
            className='Button Button-danger'
            onClick={props.onDeleteOptions}>Remove All</button> 
        </div>
        <div className='Widget-message'>         
            {props.options.length === 0 && <p>There's currently no options!</p>}
            {props.options.length >= 1 &&
            <ul>
                {
                    props.options.map(
                        (option, index) => 
                            <Option 
                                ordinate={index + 1}
                                key={option}
                                optionText={option}
                                onDeleteOption={props.onDeleteOption}/>
                        )
                }                
            </ul>}
        </div>
    </div>
);

export default Options;