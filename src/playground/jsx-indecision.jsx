
//babel src/app.jsx --out-file=public/scripts/app.js --presets=env,react --watch
console.log('App is running');


// JSX - Javascript XML
// let app = {
//     title: 'Indecision App',
//     subTitle: 'My SubTitle'
// }, 
// template1 = (
//     <div>
//         <h1>{`This is ${app.title}`}</h1>
//         <p>{app.subTitle}</p>
//         <ol>
//             <li>Item 1</li>
//             <li>Item 2</li>
//         </ol>
//     </div>
// );


// let user = {
//     name: 'Fred',
//     age: 32,
//     location: 'Carignan'
//     },
//     isValidAge = age => {
//         return !isNaN(age) && age;
//     },
//     getLocation = location => {
//         return location ? <p>{`Location: ${location}`}</p> : undefined;
//     };

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if(option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderApp();
    }

    console.log('Form Submited', option);
},
removeAll = () => {
    console.log('remove all', app.options);
    app.options = [];
    renderApp();
},
onMakeDesicion = () => {
    const randomNumber = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNumber];
};

const appRoot = document.querySelector('#app');

const renderApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <button onClick={removeAll}>Remove All</button>
            <button onClick={onMakeDesicion} disabled={app.options.length === 0}>What should I do</button>
            <ol>
                {app.options.map((option, index) => <li key={index}>{option}</li>)}
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>           
        </div>
    )

    ReactDOM.render(template, appRoot);
}

renderApp();

