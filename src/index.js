// TODO: Render the `App` component to the DOM
import App from './components/App.js';
console.log('App:', App);

//ReactDOM.render(<App />, document.getElementByID('app'));

ReactDOM.render(
  <App />,
  document.getElementById('app')
);