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
            <form onSubmit={this.AddOption}>
                <span>
                    <input type="text" name="option" />
                    {this.state.error && <p>{this.state.error}</p>}
                </span>
                <button>Add Option</button>
            </form>      
        )
    }
}
