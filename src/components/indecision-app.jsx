import React from 'react';
import Header from './header';
import AddOption from './add-options';
import Options from './options';
import Action from './action'
import OptionModal from './option-modal';

Header.defaultProps = {
    title: '~ Indecision ~ App'
}

export default class IndecisionApp extends React.Component {
    static defaultProps = {
        options: [],
    }
    
    state = { 
        options: this.props.options,
        selectedOption: undefined
    }
    
    // React equivalent of onInit(); React Component LifeCycle
    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
    
            if (options) {
                this.setState(() => ({ options }));
            }
        } catch (e) {
            console.error('Error JSON', e);
        }       
    }

    // React equivalent of onChanges(); React Component LifeCycle
    componentDidUpdate(prevProps, prevState) {
        if(prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }

        console.log('Updating DATA', prevProps, prevState);
    }

    // React equivalent of onDestroy(); React Component LifeCycle
    componentWillUnmount() {
        localStorage.clear();
    }

    handleRandomPick = () => {
        const randomNumber = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNumber];

        this.setState(() => ({ selectedOption: option }));
    }

    handleEmptySelectedState = () => {
        this.setState(() => ({ selectedOption: undefined }));
    }

    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }));
    }

    handleAddOption = option => {

        if(!option) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }

        this.setState(prevState => ({ options: prevState.options.concat(option) }));
    }

    handleDeleteOption = optionToRemove => {
        this.setState(prevState => ({
            options: prevState.options.filter( option => optionToRemove !== option )
        }));
    }

    render() {
        const subTitle = 'Put your life in the hands of a computer';

        return (
            <div className='main'>
                <Header subTitle={subTitle} />
                <div className='container'>
                    <Action
                    onRandomPick={this.handleRandomPick} 
                    hasOptions={this.state.options.length > 0}/> 
                    <div className='Widget'>
                    <Options 
                        options={this.state.options} 
                        onDeleteOptions={this.handleDeleteOptions}
                        onDeleteOption={this.handleDeleteOption}/>
                    <AddOption 
                        onAddOption={this.handleAddOption}/>
                    <OptionModal 
                        selectedOption={this.state.selectedOption}
                        onClose={this.handleEmptySelectedState} />
                        </div>
                    </div>
            </div>
        )
    }
}
