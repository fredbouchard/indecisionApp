class Visible extends React.Component {
    constructor(
        props
    ) {
        super(props)
        this.onToggleDetails = this.onToggleDetails.bind(this);
        this.state = {
            toggle: false
        }
    }

    onToggleDetails() {
        this.setState(prevState => {
           return {
                toggle: !prevState.toggle
           } 
        });
    }

    render() {
        return (
            <div>
            <h1>Visibility Toggle</h1>
            <button onClick={this.onToggleDetails}>{this.state.toggle ? 'Hide Details': 'Show details'}</button>
            {this.state.toggle && <p>Hidden secret prout!</p>}            
            </div>
        );
    }
}

const appRoot = document.getElementById('app');

ReactDOM.render(<Visible />, appRoot);