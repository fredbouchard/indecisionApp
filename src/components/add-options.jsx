import React from 'react';

export default class AddOption extends React.Component {
    state = {
        error: undefined
    }   

    AddOption = e => {
        e.preventDefault();
        
        //e.target (form) > elements ) input + button > option > value
        const option = e.target.elements.option.value.trim();
        const error = this.props.onAddOption(option);

        this.setState(() => ({ error }));  
        
        
        if (!error) {
            e.target.elements.option.value = '';
        }
    }

    render () {
        return (           
          
            <div className='Widget-footer'>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.AddOption}>
                    <div className='Widget-input'>
                        <input 
                            type="text" 
                            name="option" />
                    </div>
                    <button class='Button Button-secondary Button--small'>Add Option</button>
                </form>  
            </div>
           
        )
    }
}
