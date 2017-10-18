// babel src/app.jsx --out-file=public/scripts/app.js --presets=env,react --watch
// live-server public
const appRoot = document.getElementById('app');

const Header = props => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subTitle && <h2>{props.subTitle}</h2>}
        </div>
    )
};

Header.defaultProps = {
    title: '~ Indecision ~ App'
}

const CTA = props => { 
    return (
        <button 
            onClick={props.onRandomPick}
            disabled={!props.hasOptions}>What should I do</button>
    )
};

const Options = props => {
    return (
        <div>
            <button onClick={props.onDeleteOptions}>Remove All</button>              
            {props.options.length === 0 && <p>There's currently no options</p>}
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
    )
};

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

class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);        
        this.state = { 
            options: props.options
        }

        this.handleRandomPick = this.handleRandomPick.bind(this);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
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

    handleRandomPick() {
        const randomNumber = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNumber];

        console.log('Option:', option);
    }

    handleDeleteOptions() {
        this.setState(() => ({ options: [] }));
    }

    handleAddOption(option) {

        if(!option) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }

        this.setState(prevState => ({ options: prevState.options.concat(option) }));
    }

    handleDeleteOption (optionToRemove) {
        this.setState(prevState => ({
            options: prevState.options.filter( option => optionToRemove !== option )
        }));
    }

    render() {
        const subTitle = 'Put your life in the hands of a computer';

        return (
            <div>
                <Header subTitle={subTitle} />
                <CTA
                    onRandomPick={this.handleRandomPick} 
                    hasOptions={this.state.options.length > 0}/> 
                <Options 
                    options={this.state.options} 
                    onDeleteOptions={this.handleDeleteOptions}
                    onDeleteOption={this.handleDeleteOption}/>
                <AddOption 
                    onAddOption={this.handleAddOption}/>
            </div>
        )
    }
}

IndecisionApp.defaultProps = {
    options: []
}

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.AddOption = this.AddOption.bind(this);
        this.state = {
            error: undefined
        }
    }

    AddOption(e) {
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


ReactDOM.render(<IndecisionApp />, appRoot);