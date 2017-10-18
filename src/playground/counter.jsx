class Counter extends React.Component {
    constructor (
        props
    ) {
        super(props);
        this.onAddOne = this.onAddOne.bind(this);
        this.onMinusOne = this.onMinusOne.bind(this);
        this.onReset = this.onReset.bind(this);

        this.state = {
            count: props.count
        }
    }

    componentDidMount() {
        try{
            const json = localStorage.getItem('count');
            const count = JSON.parse(json);

            if (!isNaN(count)) {
                this.setState(() => ({ count: parseInt(count, 10) }));
            }
        } catch(e) {
            console.error('>>>', e);
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.count !== this.state.count) {
            const json = JSON.stringify(this.state.count);
            localStorage.setItem('count', json);
        }
    }

    componentWillUnmount() {
        localStorage.clear();
    }

    onAddOne() {
        this.setState(previousState => {
            return { 
                count: previousState.count + 1,
            }
        });       
    }

    onMinusOne() {
        this.setState(previousState => {
            return { 
                count: previousState.count - 1,
            }
        });  
    }

    onReset() {
        this.setState(() => {
            return { 
                count: 0,
            }
        });  
    }

    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.onAddOne}>+1</button>
                <button onClick={this.onMinusOne}>-1</button>
                <button onClick={this.onReset}>Reset</button>
            </div>
        );
    }
}

Counter.defaultProps = {
    count: 0
}

ReactDOM.render(<Counter />, document.getElementById('app'));



// let count = 0;
// const addOne = () => {
//     count ++;
//     renderCounterApp();  
// },
// minusOne = () => {
//     count --;
//     renderCounterApp();
// },
// reset = () => {
//     count = 0;
//     renderCounterApp();
// };

// template = (
//     <div>
//         <h1>Count: {count}</h1>
//         <button onClick={addOne}>+1</button>
//         <button onClick={minusOne}>-1</button>
//         <button onClick={reset}>Reset</button>
//     </div>
// )

// const renderCounterApp = () => {
//     const template = ();
// }


// renderCounterApp();