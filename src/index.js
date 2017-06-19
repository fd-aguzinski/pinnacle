import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import store, { history } from './store/store';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

ReactDOM.render(
<Provider store={store}>
	<ConnectedRouter history={history}>
		<div>
			<App />
		</div>
		</ConnectedRouter>
</Provider>
, document.getElementById('root'));
