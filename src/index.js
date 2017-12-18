import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { store } from '@redux/store';
// const RootApp = () => {
//     return (
//         <Provider store={store}>
//             <App/>
//         </Provider>
//     );
// }

const render = Component => {
    const App =  () => (
        <Provider store={store}>
            <Component/>
        </Provider>
    );

    ReactDOM.render(<App />, document.getElementById('root'));
};

render(App);
// ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
